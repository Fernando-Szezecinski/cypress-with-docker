/// <reference types="cypress" />

describe('Cypress test with docker', () => {

    beforeEach(() => {
        cy.visit('https://www.example.com')
    })

    it('should load h1 element', () => {
        cy.get('h1')
            .should('be.visible')
    })

    it('should contain Example Domain in the title', () => {
        cy.title()
            .should('include', 'Example Domain')
    })
})