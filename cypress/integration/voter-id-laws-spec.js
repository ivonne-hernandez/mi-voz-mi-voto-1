describe('Voter Id Laws page user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/voter-id-laws')
  });

  it('Should display voter ID laws', () => {
    cy.fixture('voterIdLaws.json').as('voterIdLaws').then((voterIdLaws) => {
      const { header2, header3, listItems } = voterIdLaws;
      cy.get('h2').should('contain', header2)
        .get('h3').should('contain', header3)
        .get('li').should('contain', listItems[0])
        .get('li').should('contain', listItems[1])
        .get('li').should('contain', listItems[2])
        .get('li').should('contain', listItems[3])
    })
  });

  it('Should have a matching route in the URL', () => {
    cy.url().should('contain', '/voter-id-laws')
  });

  it('Should be able to navigate back to the main page', () => {
    cy.get('.vote-image').click()
      .url().should('contain', '/')
  });
})
