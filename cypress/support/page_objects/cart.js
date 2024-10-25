export class cartPage {

    clickPlaceOrder(){
        cy.get('[class="btn btn-success"]').click()
    }

    enterNameOrderForm(){
        cy.get('#name').type("x")
        cy.get('#name').clear().type("John Buyer")
    }

    enterCountryOrderForm(){
        cy.get('#country').type("x")
        cy.get('#country').clear().type("Germany")
    }

    enterCityOrderForm(){
        cy.get('#city').type("x")
        cy.get('#city').clear().type("Berlin")
    }

    enterCardOrderForm(){
        cy.get('#card').type("x")
        cy.get('#card').clear().type("1234567890")
    }

    enterMonthOrderForm(){
        cy.get('#month').type("x")
        cy.get('#month').clear().type("September")
    }

    enterYearOrderForm(){
        cy.get('#year').type("x")
        cy.get('#year').clear().type("2030")
    }

    confirmOrderForm(){
        cy.get('#name.form-control').should('have.value','John Buyer')
        cy.get('#country.form-control').should('have.value','Germany')
        cy.get('#city.form-control').should('have.value', 'Berlin')
        cy.get('#card.form-control').should('have.value', '1234567890')
        cy.get('#month.form-control').should('have.value', 'September')
        cy.get('#year.form-control').should('have.value', '2030')
    }

    clickPurchaseButton(){
        cy.get('[onclick="purchaseOrder()"]').click()
    }

    confirmPurchase(){
        cy.get('h2').should('contain', 'Thank you for your purchase!')
        cy.get('p').should('contain', 'Amount: 1100 USD')
        cy.get('p').should('contain', 'Card Number: 1234567890')
        cy.get('p').should('contain', 'Name: John Buyer')
    }

    okConfirmation(){
        cy.get('.sa-confirm-button-container').click()
    }
}

export const onCartPage = new cartPage()