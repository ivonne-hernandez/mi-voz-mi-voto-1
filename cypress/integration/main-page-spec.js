describe('Mi Voz, Mi Voto main page user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/')
  });

  it('Should see a header with a title and related icon', () => {
    cy.get('.app-name').should('contain', 'My Voice, My Vote')
      .get('.vote-image').should('be.visible')
  });

  it('Should see a link to Our Story and En Espanol & the paths should update when clicked', () => {
    cy.get('.our-story-button').click()
      .url().should('include', 'our-story')
  });

  it('Should be able to visit each card, click the links in the list & the path should update', () => {
    cy.get('.vote-image').should('be.visible')
    cy.fixture('routes.json').as('routes').then((routes) => {
      const checkAllRoutes = routes.map(route => {
        cy.get('.route-card-header').should('contain', route.header)
          const checkAllListItems = route.listItems.map((listItem, index) => {
            cy.get('.link-item').contains(listItem)
              .get(`a[href="${route.linksTo[index]}"]`).click()
              .url().should('include', route.linksTo[index])
              .get('.vote-image').click()
              .url().should('contain', '/')
          })
      })
    });
  });
})
