describe('Mi Voz, Mi Voto email notification form user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to input a first name, last name, email & select a state, language, and confirm subscription', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get(`input[value=${user1.first_name}]`).should('have.value', `${user1.first_name}`)
        .get('input[id=last_name]').type(user1.last_name)
        .get(`input[value=${user1.last_name}]`).should('have.value', `${user1.last_name}`)
        .get('select[id=state_name]').select(user1.state_name)
        .get(`select[id=state_name]`).should('have.value', `${user1.state_name}`)
        .get('input[id=email]').type(user1.email)
        .get(`input[value="${user1.email}"]`).should('have.value', `${user1.email}`)
        .get('input[id=english]').click()
        .get(`input[value=${user1.language}]`).should('have.value', `${user1.language}`)
        .get('input[id=agree_to_emails]').should('have.value', 'false')
        .get('input[id=agree_to_emails]').click()
        .get('input[id=agree_to_emails]').should('have.value', 'true')
    })
  });

  it('Should include text-based labels for each input', () => {
    cy.get('form[class="form-container"]').should('have.length', 1)
      .get('p[class="form-header"]').contains('State Election Reminders')
      .get('label[class="label"]').contains('First Name')
      .get('label[class="label"]').contains('Last Name')
      .get('label[class="label"]').contains('State')
      .get('label[class="label"]').contains('Email address')
      .get('label[class="preferred-lang-p label"]').contains('Preferred language')
      .get('label[class="label-radio"]').contains('English')
      .get('label[class="label-radio"]').contains('Spanish')
      .get('label[class="agree-to-emails-checkbox label"]').contains('Sign up for email notifications about upcoming elections in my state.')
      .get('button[class="submit-button"]').should('contain', 'Submit')
  });

  it('Should be able to submit the form & see a message confirming successful subscription', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.request({
        failOnStatusCode: false,
        mode: 'cors',
        method: 'POST',
        url: 'http://localhost:3001/api/v1/users',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: user1
      }).then( ({ status, body }) => {
        cy.fixture('success.json').as('success').then((success) => {
          expect(status).to.equal(success.status)
          expect(body.success).to.contain(success.body.success)
        })
      })

      // cy.get('input[id=first_name]').type(user1.first_name)
      //   .get('input[id=last_name]').type(user1.last_name)
      //   .get('select[id=state_name]').select(user1.state_name)
      //   .get('input[id=email]').type(user1.email)
      //   .get('input[id=english]').click()
      //   .get('input[id=agree_to_emails]').click()
      //   .get('.submit-button').click()
      //   .wait('@postStub')
      //   .get('.server-message').should('contain', `You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to ${user1.email}.`)
    })
  });

  xit('Should be able to navigate & submit the form using only the keyboard', () => {
    cy.fixture('user1.json').as('user1').then((user2) => {
      cy.get('form')
        .realPress('Tab').realPress('Tab').realPress('Tab')
        .focused().should('have.id', 'first_name')
        .type(user2.first_name)
        .realPress('Tab')
        .focused().should('have.id', 'last_name')
        .type(user2.last_name)
        .realPress('Tab')
        .focused().should('have.id', 'state_name')
        .type(`${user2.state_name}l`)
        .realPress('Tab')
        .focused().should('have.id', 'email')
        .type(user2.email)
        .realPress('Tab')
        .focused().should('have.id', 'english')
        .realPress('Space')
        .get(`input[value=${user2.language}]`).should('have.value', user2.language)
        .realPress('Tab')
        .focused().should('have.id', 'agree_to_emails')
        .get('input[id=agree_to_emails]').should('have.value', 'false')
        .realPress('Space')
        .get('input[id=agree_to_emails]').should('have.value', 'true')
        .realPress('Tab')
        .realPress('Enter')
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
          headers: {'Content-Type': 'application/json'},
          body: user2
        })
        .get('.server-message').should('contain', `You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to ${user2.email}.`)
    })
  });

  xit('Should clear all inputs and selections once the form is submitted', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
          headers: {'Content-Type': 'application/json'},
          body: user1
        })
        .get('input[id=first_name]').should('be.empty')
        .get('input[id=last_name]').should('be.empty')
        .get('select[id=state_name]').should('have.value', 'Select')
        .get('input[id=email]').should('be.empty')
        .get('input[id=english]').should('have.value', '')
        .get('input[id=spanish]').should('have.value', '')
        .get('input[id=agree_to_emails]').should('have.value', 'false')
    })
  });

  xit('Should show a prompt if any of the required inputs are missing', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please enter your first and last name.')
        .get('input[id=first_name]').type(user1.first_name)
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please enter your first and last name.')
        .get('input[id=last_name]').type(user1.last_name)
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please select a state.')
        .get('select[id=state_name]').select(user1.state_name)
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please enter a valid email.')
        .get('input[id=email]').type(user1.email)
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please select your preferred language.')
        .get('input[id=english]').click()
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please check the "Sign up for email notifications" box.')
        .get('input[id=agree_to_emails]').click()
    })
  });

  xit('Should display a loading image while the submitting the form', () => {
    cy.fixture('user3.json').as('user1').then((user3) => {
      cy.get('input[id=first_name]').type(user3.first_name)
        .get('input[id=last_name]').type(user3.last_name)
        .get('select[id=state_name]').select(user3.state_name)
        .get('input[id=email]').type(user3.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
          headers: {'Content-Type': 'application/json'},
          body: user3
        })
    })
      .get('.loading-icon').should('be.visible')
  });

  xit('Should display an error message if the email is already subscribed', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
          headers: {'Content-Type': 'application/json'},
          body: user1
        })
        .get('.server-message').should('contain', `${user1.email} is already subscribed to receive election notifications.`)
    })
  });

  xit('Should display a message confirming the subscription to election notifications', () => {
    cy.fixture('user2.json').as('user2').then((user2) => {
      cy.get('input[id=first_name]').type(user2.first_name)
        .get('input[id=last_name]').type(user2.last_name)
        .get('select[id=state_name]').select(user2.state_name)
        .get('input[id=email]').type(user2.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
          headers: {'Content-Type': 'application/json'},
          body: user2
        })
        .get('.server-message').should('contain', `You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to ${user2.email}.`)
    })
  });

  xit('Should display an error image & error message if the server can\'t complete the request', () => {
    cy.intercept(
      'POST',
      'http://localhost:3001/api/v1/users',
      { statusCode: 500 }
    ).as('getServerFailure')

    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .wait('@getServerFailure')
    })
    cy.get('.error-text').should('contain', 'We\'re sorry, please try again.')
  });

  it.skip('Should display a button to send the user back to the form', () => {

  });

  it.skip('', () => {

  });

})
