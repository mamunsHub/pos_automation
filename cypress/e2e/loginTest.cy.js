import LoginPage  from "../pages/LoginPage"

const loginpage = new LoginPage()


describe('Login Module Tests', () => {

    beforeEach(() => {
        cy.visit('/baseUrl')
    })

    it('Verify that the user can login successfully into dashboard with valid email and password', () => {

        loginpage.getEmail("superadmin@reformedtech.org")
        loginpage.getPassword("password")
        loginpage.getSignInButton().click()

        //Verufy that a success message is displayed
        //cy.contains('Login successfull').should('be.visible')

        // Title and dashoboard verification
        cy.title().should("eq", "DokanE")
        loginpage.getDashboardText().should("contain.text", "Dashboard")

    })

    it('Verify that the user cannot login with invalid email', () => {

        loginpage.getEmail("invalidemail@reformedtech.org")
        loginpage.getPassword("invalid password")
        loginpage.getSignInButton().click()

        // Verify that an invalid email error message is displayed
        cy.contains('The selected email is invalid.').should('be.visible')

    })

    it('Verify that the user cannot login with wrong password', () => {

        loginpage.getEmail("superadmin@reformedtech.org")
        loginpage.getPassword("invalid password")
        loginpage.getSignInButton().click()

        // Verify that an invalid email error message is displayed
        cy.contains('Wrong password').should('be.visible')

    })


})