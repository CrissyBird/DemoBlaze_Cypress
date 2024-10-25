Cypress.Commands.add('login', (username,password) => {
    cy.session ([username,password], () => {
        cy.visit('/')
        cy.get('#login2').click()
        cy.get('#loginusername').should('be.visible')
        cy.get('#loginusername').type('x').clear().type(username)
        cy.get('#loginpassword').type('x').clear().type(password)
        cy.get('[onclick="logIn()"]').click()
        cy.get('#logout2').should('be.visible')
    })
})
