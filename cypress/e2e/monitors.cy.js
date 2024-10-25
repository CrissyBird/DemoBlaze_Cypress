import { onHomePage } from "../support/page_objects/home"

describe ('Navigating to Monitors', () => {
    
    beforeEach('log in', () => {
        cy.login('crissyTest', 'test123')
    })

    it('navigate to monitors', () => {
        cy.visit ('/')
        onHomePage.navigateToMonitors()
    })
})