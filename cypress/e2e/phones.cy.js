import { onHomePage } from "../support/page_objects/home"

describe ('Navigating to Phones', () => {
    
    beforeEach('log in', () => {
        cy.login('crissyTest', 'test123')
    })

    it('navigate to phones', () => {
        cy.visit ('/')
        onHomePage.navigateToPhones()
    })
})

