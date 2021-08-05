/// <reference types="cypress" />

describe('Basic Tests', () => {
    it('We have the correct page title', () => {
        cy.visit('https://codedamn.com')

        // Searches for text within the DOM, can be partial
        cy.contains('Be industry-ready fullstack coder. 10x faster and 100x cheaper.')

        // Checks to see if a div with the ID of root exists
        cy.get('div#root')

        cy.get('[data-testid="logo"]')
    })
})