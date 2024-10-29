import { onHomePage } from "../support/page_objects/home"
import { onCartPage } from "../support/page_objects/cart"
import { onLaptopsPage } from "../support/page_objects/laptops"

describe ('Selecting MacBookPro', () => {
    
    beforeEach('log in', () => {
        cy.login('crissyTest', 'test123')
    })

    it('add Macbook Pro to Cart and Check Out', () => {
        cy.visit ('/')
        onHomePage.navigateToLaptops()
        onLaptopsPage.selectMacBookPro()
        onHomePage.navigatetoCart()
        cy.wait(1000)
        cy.get("#tbodyid").find('.success').should("have.length",1)
        cy.get('td').contains('MacBook Pro')
        cy.get('#totalp').contains('1100')
        onCartPage.clickPlaceOrder()
        onCartPage.enterNameOrderForm()
        onCartPage.enterCountryOrderForm()
        onCartPage.enterCityOrderForm()
        onCartPage.enterCardOrderForm()
        onCartPage.enterMonthOrderForm()
        onCartPage.enterYearOrderForm()
        onCartPage.confirmOrderForm()
        onCartPage.clickPurchaseButton()
        onCartPage.confirmPurchase()
        cy.wait(1000)
        onCartPage.okConfirmation()
    })
    })
