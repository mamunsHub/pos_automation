class LoginPage {

    getEmail(text){

        return cy.get("input[placeholder='Your Email']").type(text)
    }

    getPassword(text){
        return cy.get("input[placeholder='Password']").type(text)
    }

    getSignInButton(){
        return cy.get(':nth-child(5) > .w-full')
    }

    getDashboardText(){
        return cy.get('.text-blue-500')
    }

    getAuthUser(){
        cy.get('.profileButton').click()
        return cy.get('#headlessui-menu-item-3')
    }

    getLogoutButton(){
        cy.get('.profileButton').click()
        return cy.get('#headlessui-menu-item-6')
    }

    getSigninPageText(){
        
        return cy.get('.mt-2')
    }

  
}

module.exports = LoginPage