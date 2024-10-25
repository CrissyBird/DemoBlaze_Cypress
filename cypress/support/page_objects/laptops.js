export class laptopsPage {

    selectMacBookPro() {
        cy.get('a').contains('MacBook Pro').click()
        cy.get('h2').should('contain', 'MacBook Pro')
        cy.get('a').contains('Add to cart').click()
    }
}

export const onLaptopsPage = new laptopsPage()
