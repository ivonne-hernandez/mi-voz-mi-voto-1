import endpoints from '../src/endpoints.js';

describe('Unsubscribe form user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/unsubscribe');
    cy.get('.en-espanol-button').select('English')
  });

  it('Should see a header for the unsubscribe feature in both English & Spanish', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.unsubscribe-form-header').should('contain', english['unsubscribe.formHeader'])
    })

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.unsubscribe-form-header').should('contain', spanish['unsubscribe.formHeader'])
    })
  });

  it('Should see a label for the email input in both English & Spanish', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.unsubscribe-label').should('contain', english['unsubscribe.emailLabel'])
    })

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.unsubscribe-label').should('contain', spanish['unsubscribe.emailLabel'])
    })
  });

  it('Should be able to enter an email address', () => {
    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('input[id=email]').type(user1.email)
        .get(`input[value="${user1.email}"]`).should('have.value', `${user1.email}`)
    })
  });

  it('Should see an unsubscribe button in English & Spanish', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.unsubscribe-button').should('contain', english['unsubscribe.button'])
    })

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.unsubscribe-button').should('contain', spanish['unsubscribe.button'])
    })
  })

  it('Should see warning message asking the user to add a valid email in both English & Spanish', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.unsubscribe-button').click()
        .get('.unsubscribe-missing-input-message-container').should('contain', english['unsubscribe.missingInputMessage'])
    })

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.unsubscribe-button').click()
        .get('.unsubscribe-missing-input-message-container').should('contain', spanish['unsubscribe.missingInputMessage'])
    })
  });

  it('Should see a sucessfully removed message in English', () => {
    cy.intercept('DELETE', endpoints.removeUser, (req) => {
      req.reply({
        fixture: 'successUnsubscribe.json'
      })
    }).as('unsubscribed')

    cy.fixture('user1.json').as('user1').then((user1) => {
      cy.get('.unsubscribe-input').type(user1.email)
        .get('.unsubscribe-button').click()
        .wait('@unsubscribed')

      cy.fixture('successUnsubscribe.json').as('successUnsubscribe').then((successUnsubscribe) => {
        cy.get('.unsubscribe-missing-input-message-container').should('contain', successUnsubscribe.success)
      })
    })
  });

  it('Should see a sucessfully removed message in Spanish', () => {
    cy.intercept('DELETE', endpoints.removeUser, (req) => {
      req.reply({
        fixture: 'successUnsubscribeES.json'
      })
    }).as('unsubscribed')

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('user2.json').as('user2').then((user2) => {
      cy.get('.unsubscribe-input').type(user2.email)
        .get('.unsubscribe-button').click()
        .wait('@unsubscribed')

      cy.fixture('successUnsubscribeES.json').as('successUnsubscribeES').then((successUnsubscribeES) => {
        cy.get('.unsubscribe-missing-input-message-container').should('contain', successUnsubscribeES.success)
      })
    })
  });

  it('Should see a message warning that the email wasn\'t subscribed in English', () => {
    cy.intercept('DELETE', endpoints.removeUser, (req) => {
      req.reply({
        fixture: 'errorNotSubscribed.json'
      })
    }).as('notSubscribed')

    cy.fixture('user2.json').as('user2').then((user2) => {
      cy.get('.unsubscribe-input').type(user2.email)
        .get('.unsubscribe-button').click()
        .wait('@notSubscribed')

      cy.fixture('errorNotSubscribed.json').as('errorNotSubscribed').then((errorNotSubscribed) => {
        cy.get('.unsubscribe-missing-input-message-container').should('contain', errorNotSubscribed.error)
      })
    })
  });

  it('Should see a message warning that the email wasn\'t subscribed in Spanish', () => {
    cy.intercept('DELETE', endpoints.removeUser, (req) => {
      req.reply({
        fixture: 'errorNotSubscribedES.json'
      })
    }).as('notSubscribedES')

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('user3.json').as('user3').then((user3) => {
      cy.get('.unsubscribe-input').type(user3.email)
        .get('.unsubscribe-button').click()
        .wait('@notSubscribedES')

      cy.fixture('errorNotSubscribedES.json').as('errorNotSubscribedES').then((errorNotSubscribedES) => {
        cy.get('.unsubscribe-missing-input-message-container').should('contain', errorNotSubscribedES.error)
      })
    })
  });

  it('Should be able to go to the main page', () => {
    cy.get('.vote-image').click()
      .url().should('contain', '/')
  });
});
