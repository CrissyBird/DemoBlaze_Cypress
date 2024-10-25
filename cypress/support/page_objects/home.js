export class homePage {

    openLoginPage(){
        cy.get('#login2').click()
    }

    enterUsername(){
        cy.get('#loginusername').type("x")
        cy.get('#loginusername').clear().type("crissyTest")
        cy.wait(1000)
    }

    enterPassword(){
        cy.get('#loginpassword').type("x")
        cy.get('#loginpassword').clear().type("test123")
        cy.wait(1000)
    }

    selectLogin(){
        cy.contains('button', 'Log in').click()
        cy.wait(1000)
    }

    confirmLogin(){
        cy.get('#nameofuser').should('contain','Welcome crissyTest')
    }

    navigateToPhones(){
        cy.contains('.list-group-item', 'Phones').click()
        cy.wait(1000)
        cy.get("#tbodyid").find('.card.h-100').should("have.length",7)
        cy.wait(1000)
    }

    navigateToLaptops(){
        cy.contains('.list-group-item', 'Laptops').click()
        cy.wait(1000)
        cy.get("#tbodyid").find('.card.h-100').should("have.length",6)
        cy.wait(1000)
    }

    navigateToMonitors(){
        cy.contains('.list-group-item', 'Monitors').click()
        cy.wait(1000)
        cy.get("#tbodyid").find('.card.h-100').should("have.length",2)
        cy.wait(1000)
    }

    navigatetoCart(){
        cy.get('a').contains('Cart').click()
    }
}

export const onHomePage = new homePage()
