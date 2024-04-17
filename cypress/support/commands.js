Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type("Mirlanda")
    cy.get('#lastName').type("Costa")
    cy.get('#email').type("mirlanda.dsc@gmail.com")
    cy.get('#open-text-area').type('Teste')
    cy.get("button[type='submit']").click()
})