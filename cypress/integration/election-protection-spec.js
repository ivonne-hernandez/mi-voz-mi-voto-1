describe('Election Protection page user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/election-protection')
    cy.get('.en-espanol-button').select('English')
  });

  it('Should display voter ID laws in English & Spanish', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('h2').should('contain', english['electionProtection.title'])
        .get('h3').should('contain', english['electionProtection.subtitle'])
        const checkListItems = english['electionProtection.listItems'].map((listItem, index) => {
          cy.get('ol')
            .get('li').eq(index).should('contain', listItem[index])
        })
    })
    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('h2').should('contain', spanish['electionProtection.title'])
        .get('h3').should('contain', spanish['electionProtection.subtitle'])
        const checkListItems = spanish['electionProtection.listItems'].map((listItem, index) => {
          cy.get('ol')
            .get('li').eq(index).should('contain', listItem[index])
        })
    })
  });

  it('Should be able to click the link provided and have it open in a new tab', () => {
    cy.get('a[class=link-to-voter-id-laws]')
      .should('have.attr', 'target').should('eq', '_blank')
      .get('a[class=link-to-voter-id-laws]')
      .should('have.attr', 'rel').should('eq', 'noopener')
      .get('a[class=link-to-voter-id-laws]')
      .should('have.attr', 'aria-describedby').should('eq', 'new-window-2')
  });

  it('Should have a matching route in the URL', () => {
    cy.url().should('contain', '/election-protection')
  });

  it('Should be able to navigate back to the main page', () => {
    cy.get('.vote-image').click()
      .url().should('contain', '/')
  });
})
