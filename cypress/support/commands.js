import LoginPage  from "../pages/LoginPage"

const login = new LoginPage()

Cypress.Commands.add("login", (email, password) => {

    cy.fixture('users.json').then((users) => {

        const user = users[0]

        login.enterEmail(user.email)
        login.enterPassword(user.password)
        login.clickSignInButton()

    })

});