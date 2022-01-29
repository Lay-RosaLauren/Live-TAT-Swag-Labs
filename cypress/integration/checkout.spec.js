/// <reference types="cypress" />
describe('SWAG LABS - Checkout', () => {
    beforeEach(() => cy.programmaticLogin())

    it('successfully goes through the ckeckout process', () => {
        cy.checkout()

        cy.contains('Checkout: Complete!')
            .and('be.visible') //and or should
        cy.contains('THANK YOU FOR YOUR ORDER')
            .and('be.visible') //and or should

    })
})

Cypress.Commands.add('checkout', () => {
    cy.dataTest('add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.dataTest('checkout').click()
    cy.dataTest('firstName').type('Lay')
    cy.dataTest('lastName').type('Campos')
    cy.dataTest('postalCode').type('12345')
    cy.dataTest('continue').click()
    cy.dataTest('finish').click()
})
