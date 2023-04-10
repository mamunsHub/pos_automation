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

  
}

module.exports = LoginPage