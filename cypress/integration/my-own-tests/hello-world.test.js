/// <reference types="cypress" />

describe('Basic Tests', () => {
    it('We have the correct page title', () => {
        // Changes the viewport size, can use built in mobile sizes
        cy.viewport(1280, 720)

        cy.visit('https://codedamn.com')

        // Searches for text within the DOM, can be partial
        cy.contains('Be industry-ready fullstack coder. 10x faster and 100x cheaper.')

        // Checks to see if a div with the ID of root exists
        cy.get('div#root')

        // Get custom attribute
        cy.get('[data-testid="logo"]')
    })
})