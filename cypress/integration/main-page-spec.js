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
      .get('.en-espanol').click()
      .url().should('include', 'en-espanol')
  });

  it('Should be able to visit each card, click the links in the list & the path should update', () => {
    cy.fixture('routes.json').as('routes').then((routes) => {
      const checkAllRoutes = routes.map(route => {
        cy.get('.route-card-header').should('contain', route.header)
          .get('.link-list').should('have.children', route.listItems.length)
          .get('.link-item').first().click()
          .url().should('include', route.linksTo[0])
          .get('.vote-image').click()
          if(route.listItems.length > 1) {
            cy.get('.link-item').second().click()
              .url().should('include', route.linksTo[1])
              .get('.vote-image').click()
          }
      })
    });
  });

  it('Should display an error message if the network is down', () => {
    cy.intercept('GET', '/our-story', {
      forceNetworkError: true
    }).as('getNetworkFailure')
      .get('.our-story-button')
      .should('be.visible').click()
      .wait('@getNetworkFailure')
      .get('.error-text').should('contain', 'We\'re sorry, please try again.')
  });
})
