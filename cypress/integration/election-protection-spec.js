describe('Election Protection page user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/election-protection')
  });

  it('Should display voter ID laws', () => {
    cy.fixture('electionProtection.json').as('electionProtection').then((electionProtection) => {
      const { header2, header3, listItems } = electionProtection;
      cy.get('h2').should('contain', header2)
        .get('h3').should('contain', header3)
        const checkListItems = listItems.map((listItem, index) => {
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
