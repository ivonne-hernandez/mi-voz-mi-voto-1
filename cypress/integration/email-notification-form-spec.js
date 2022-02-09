describe('Mi Voz, Mi Voto email notification form user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to input a first name, last name, email & select a state, language, and confirm subscription.', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get(`input[value=${user1.first_name}]`).should('equal', `${user1.first_name}`)
        .get('input[id=last_name]').type(user1.last_name)
        .get(`input[value=${user1.last_name}]`).should('equal', `${user1.last_name}`)
        .get('select[id=state_name]').select(user1.state_name)
        .get(`select[value=${user1.state_name}]`).should('equal', `${user1.state_name}`)
        .get('input[id=email]').type(user1.email)
        .get(`input[value=${user1.email}]`).should('equal', `${user1.email}`)
        .get('input[id=english]').click()
        .get(`input[value=${user1.language}]`).should('equal', `${user1.language}`)
        .get('input[id=agree_to_emails]').should('equal', 'false')
        .get('input[id=agree_to_emails]').click()
        .get('input[id=agree_to_emails]').should('equal', 'true')
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
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
        body: user1
      })
        .get('.success-message').should('contain', `You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to ${user.email}.`)
    })
  });

  it('Should be able to navigate & submit the form using only the keyboard.', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.type('{tab}', '{tab}', '{tab}')
        .type(user1.first_name)
        .type('{tab}')
        .type(user1.last_name)
        .type('{tab}')
        .type(`${user1.state_name}l`)
        .type('{tab}')
        .type(user1.email)
        .type('{tab}')
        .type('{space}')
        .get(`input[value=${user1.language}]`).should('equal', user1.language)
        .type('{tab}')
        .get('input[type=radio].agree_to_emails').check('false').should('equal', 'false')
        .type('{space}')
        .get('input[type=radio].agree_to_emails').check('true').should('equal', 'true')
        .type('{tab}')
        .type('{enter}')
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
        body: user1
      })
      .get('.success-message').should('contain', `You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to ${user.email}.`)
    })
  });

  it('Should clear all inputs and selections once the form is submitted.', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
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

  it('Should show a prompt if any of the required inputs are missing.', () => {
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



  it('Should display a loading image while the submitting the form', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
        body: user1
      })
    })
      .get('.loading-icon').should('be.visible')
  });

  it('Should display an error message if the email is already subscribed', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
        body: user1
      })
    })
      .get('.error-text').should('contain', 'This email is already susbscribed to receive election notifications.')
  });

  it('Should display a message confirming the subscription to election notifications', () => {
    cy.fixture('user2.json').as('user2').then((user2) => {
      cy.get('input[id=first_name]').type(user2.first_name)
        .get('input[id=last_name]').type(user2.last_name)
        .get('select[id=state_name]').select(user2.state_name)
        .get('input[id=email]').type(user2.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
        body: user2
      })
      .get('.success-message').should('contain', `You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to ${user2.email}.`)
    })
  });

  it('Should display an error image & error message if the server can\'t complete the request', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
        .get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .intercept('POST', 'http://localhost:3001/api/v1/users', {
        body: {"first_name": "Elise"}
      })
    })
    cy.get('.error-text').should('contain', 'Error creating subscriber.')
  });

  it.skip('Should display a button to send the user back to the form', () => {

  });

  it.skip('', () => {

  });

})
