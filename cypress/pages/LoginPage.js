class LoginPage {

    enterEmail(text){

        return cy.get("input[placeholder='Your Email']").type(text)
    }

    enterPassword(text){
        return cy.get("input[placeholder='Password']").type(text)
    }

    clickSignInButton(){
        return cy.get("button[type='submit']").click()
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
        return cy.get('#headlessui-menu-item-6').click()
    }

    verifySigninPageText(){
        
        return cy.get('.mt-2')
    }

  
}

module.exports = LoginPage