describe('Our Story page user flow', () => {
  beforeEach(() => {
    cy.checkPageA11y('/our-story')
  });

  it('Should see all four developers\' names, photo, title, and reason for working on the app', () => {
    cy.fixture('devs.json').as('devs').then((devs) => {
      const checkAllDevs = devs.map(dev => {
      cy.get('.dev-name').should('contain', dev.name)
        .get(`.${dev.name.split(' ')[0]}`).should('be.visible')
        .get(`.${dev.name.split(' ')[0]}`).should('have.attr', 'alt')
        .should('contain', dev.name)
        .get('.dev-title').should('contain', dev.title)
        .get('.dev-story').should('contain', dev.story)
      })
    })
  });

  it('Should have links to each dev\'s LinkedIn and GitHub & the links should open in a new tab', () => {
    cy.fixture('devs.json').as('devs').then((devs) => {
      const checkAllDevsLinks = devs.map(dev => {
        cy.get(`a[href="${dev.linkedin}"]`).should('have.attr', 'target')
          .should('eq', '_blank')
          .get(`a[href="${dev.linkedin}"]`)
          .should('have.attr', 'rel')
          .should('eq', 'noopener')
          .get(`a[href="${dev.linkedin}"]`)
          .should('have.attr', 'aria-describedby')
          .should('eq', 'new-window-2')
          .get(`.${dev.name.split(' ')[0]}`).should('be.visible')
          .should('have.attr', 'alt')
          .should('contain', dev.name)
        cy.get(`a[href="${dev.github}"]`).should('have.attr', 'target')
          .should('eq', '_blank')
          .get(`a[href="${dev.github}"]`)
          .should('have.attr', 'rel')
          .should('eq', 'noopener')
          .get(`a[href="${dev.github}"]`)
          .should('have.attr', 'aria-describedby')
          .should('eq', 'new-window-2')
          .get(`.${dev.name.split(' ')[0]}`).should('be.visible')
          .should('have.attr', 'alt')
          .should('contain', dev.name)
      })
    })
  });

  it('Should be able to navigate back to the main page', () => {
    cy.get('.vote-image').click()
      .url().should('contain', '/')
  });
})
