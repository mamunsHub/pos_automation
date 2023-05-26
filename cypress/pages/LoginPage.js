class LoginPage {

    enterEmail(text){

        cy.get("input[placeholder='Your Email']").type(text)
    }

    enterPassword(text){
        cy.get("input[placeholder='Password']").type(text)
    }

    clickSignInButton(){
        cy.get("button[type='submit']").click()
    }

    verifyDashboardText(){
        return cy.get('.text-blue-500')
    }

    verifyAuthUser(){
        cy.get('.profileButton').click()
        return cy.get('#headlessui-menu-item-3')
    }

    clickLogoutButton(){
        cy.get('.profileButton').click()
        cy.get('#headlessui-menu-item-6').click()
    }

}

module.exports = LoginPage