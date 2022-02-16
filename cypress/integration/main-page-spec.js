describe('Mi Voz, Mi Voto main page user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/')
    cy.get('.en-espanol-button').select('English')
  });

  it('Should see a header with an icon and the title, in English & Spanish', () => {
    cy.get('.vote-image').should('be.visible')
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.app-name').should('contain', english['header.appName'])
    })
    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.app-name').should('contain', spanish['header.appName'])
    })
  });

  it('Should see a button that links to \'our story\' translated to English & Spanish & the path should update when clicked', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.our-story-button').should('contain', english['header.ourStoryButton']).click()
        .url().should('include', 'our-story')
    })
    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.our-story-button').should('contain', spanish['header.ourStoryButton']).click()
        .url().should('include', 'our-story')
    })
  });

  it('Should see a selector which changes languages between English & Spanish', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.get('.en-espanol-button').select('English')
        .get('.en-espanol-button').should('have.value', 'en')
        .get('.app-name').should('contain', english['header.appName'])
    })
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.get('.en-espanol-button').select('Español')
        .get('.en-espanol-button').should('have.value', 'es')
        .get('.app-name').should('contain', spanish['header.appName'])
    })
  });

  it('Should be able to visit each card, with headers and links in English & Spanish, click the links in the list & the path should update', () => {
    cy.fixture('english.json').as('english').then((english) => {
      cy.fixture('routes.json').as('routeLinks').then((routeLinks) => {
        const checkAllRouteTranslations = english['homePageRouting.routes'].map(route => {
          cy.get('.route-card-header').should('contain', route.header)
          const checkAllListItems = route.listItems.map((listItem, index) => {
            const checkAllRouteLinks = routeLinks[index].linksTo.map(link => {
              cy.get('.link-item').contains(listItem)
                .get(`a[href="${link}"]`).click()
                .url().should('include', link)
                .get('.vote-image').click()
                .url().should('contain', '/')
            })
          })
        })
      })
    })

    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
      cy.fixture('routes.json').as('routeLinks').then((routeLinks) => {
        const checkAllRouteTranslations = spanish['homePageRouting.routes'].map(route => {
          cy.get('.route-card-header').should('contain', route.header)
          const checkAllListItems = route.listItems.map((listItem, index) => {
            const checkAllRouteLinks = routeLinks[index].linksTo.map(link => {
              cy.get('.link-item').contains(listItem)
                .get(`a[href="${link}"]`).click()
                .url().should('include', link)
                .get('.vote-image').click()
                .url().should('contain', '/')
            })
          })
        })
      })
    })
  });

  it('Should display \'404 page not found\' in English & Spanish if the user types in a wrong URL & should be able to navigate to the main page', () => {
    cy.visit('/squirrels')
    cy.get('.en-espanol-button').select('English')
    cy.fixture('english.json').as('english').then((english) => {
        cy.get('h2').should('contain', english['pageNotFound.message'])
          .get('.page-not-found-container')
          .get('button').contains(english['pageNotFound.button']).click()
          .url().should('contain', '/')
    })

    cy.visit('/squirrels')
    cy.get('.en-espanol-button').select('Español')
    cy.fixture('spanish.json').as('spanish').then((spanish) => {
        cy.get('h2').should('contain', spanish['pageNotFound.message'])
          .get('.page-not-found-container')
          .get('button').contains(spanish['pageNotFound.button']).click()
          .url().should('contain', '/')
    })
  });
})
