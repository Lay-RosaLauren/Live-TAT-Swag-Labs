/// <reference types="cypress" />
describe('SWAG Labs - Reset App State', () => {
    beforeEach(() => cy.programmaticLogin())

    it('removes item from cart on reset app state', () => {
        cy.resetApp()
    })
})

Cypress.Commands.add('resetApp', () => {
    cy.dataTest('add-to-cart-sauce-labs-backpack')
        .click()
    cy.get('.shopping_cart_link')
        .as('shoppingCart')
        .should('contain', '1')
    cy.get('#react-burger-menu-btn')
        .click()
    cy.contains('a', 'Reset App State')
        .should('be.visible')
        .click()
    cy.get('@shoppingCart')
        .should('not.contain', '1')
})
