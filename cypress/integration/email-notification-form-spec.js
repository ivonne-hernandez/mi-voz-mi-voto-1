describe('Mi Voz, Mi Voto email notification form user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('http://localhost:3000')
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

  it('Should show a prompt if any of the required inputs are missing', () => {
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

  it('Should remove the missing input messages as soon as the user starts to fill it in', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please enter your first and last name.')
        .get('input[id=first_name]').type(user1.first_name)
        .get('.missing-input-message').should('contain', '')
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please enter your first and last name.')
        .get('input[id=last_name]').type(user1.last_name)
        .get('.missing-input-message').should('contain', '')
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please select a state.')
        .get('select[id=state_name]').select(user1.state_name)
        .get('.missing-input-message').should('contain', '')
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please enter a valid email.')
        .get('input[id=email]').type(user1.email)
        .get('.missing-input-message').should('contain', '')
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please select your preferred language.')
        .get('input[id=english]').click()
        .get('.missing-input-message').should('contain', '')
        .get('.submit-button').click()
        .get('.missing-input-message-container').should('contain', 'Please check the "Sign up for email notifications" box.')
        .get('input[id=agree_to_emails]').click()
        .get('.missing-input-message-container').should('contain', '')
      })
  });

  it('Should be able to submit the form, see a confirmation message & related icon', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/users', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'success.json'
      })
    }).as('successfulPost')

    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .wait('@successfulPost')
        .get('.success-message').should('contain', 'A confirmation email for state election reminders has been sent to ')
        .get('.green').should('be.visible')
    })
  });

  it('Should be given a list of fifty states upon selecting the dropdown menu', () => {
    cy.get('#state_name option').then(options => {
      const actual = [...options].map(option => option.value);
      cy.fixture('states.json').as('states').then((states) => {
        const statesValue = states.map(state => state.value)
        expect(actual).to.deep.eq(statesValue)
      })
    })
  });

  it('Should allow the user to change their email language preference', () => {
    cy.get('input[id=english]').click()
      .get('input[id=english]').should('be.checked')
      .get('input[id=spanish]').click()
      .get('input[id=english]').should('not.be.checked')
      .get('input[id=spanish]').should('be.checked')
  });

  it('Should clear all inputs and selections once the form is submitted', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/users', (req) => {
      req.reply({
        fixture: 'success.json'
      })
    }).as('successfulPost')

    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .wait('@successfulPost')
        .get('input[id=first_name]').should('be.empty')
        .get('input[id=last_name]').should('be.empty')
        .get('select[id=state_name]').should('have.value', null)
        .get('input[id=email]').should('be.empty')
        .get('input[id=english]').should('not.be.checked')
        .get('input[id=spanish]').should('not.be.checked')
        .get('input[id=agree_to_emails]').should('have.value', 'false')
    })
  });

  it('Should display a loading image while the submitting the form', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/users', (req) => {
      req.reply({
        delay: 1000,
        fixture: 'success.json'
      })
    })

    cy.fixture('user3.json').as('user3').then((user3) => {
      cy.get('input[id=first_name]').type(user3.first_name)
        .get('input[id=last_name]').type(user3.last_name)
        .get('select[id=state_name]').select(user3.state_name)
        .get('input[id=email]').type(user3.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .get('.loading-icon').should('be.visible')
    })
  });

  it('Should display an error message & related icon if the email is already subscribed', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/users', (req) => {
      req.reply({
        fixture: 'errorDuplicate.json'
      })
    }).as('duplicatePost')

    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=first_name]').type(user1.first_name)
        .get('input[id=last_name]').type(user1.last_name)
        .get('select[id=state_name]').select(user1.state_name)
        .get('input[id=email]').type(user1.email)
        .get('input[id=english]').click()
        .get('input[id=agree_to_emails]').click()
        .get('.submit-button').click()
        .wait('@duplicatePost')
        .get('.fail-message').should('contain', `${user1.email} is already subscribed to receive election notifications.`)
        .get('.red').should('be.visible')
    })
  });

  it('Should display an error image & error message if the server can\'t complete the request', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/users', {statusCode: 500}).as('getServerFailure')

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
})
