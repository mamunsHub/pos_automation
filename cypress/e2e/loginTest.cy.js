import LoginPage  from "../pages/LoginPage"

const loginpage = new LoginPage()


describe('Login Module Tests', () => {

    beforeEach(() => {
        cy.visit('/baseUrl')
    })

    it('Verify that the user can login successfully into dashboard with valid email and password', () => {

        //Using cypress custom login command
        cy.login()
    
    
        // Title and dashoboard verification
        cy.title().should("eq", "DokanE")
        loginpage.getDashboardText().should("contain.text", "Dashboard")

        // Authenticated user verification
        loginpage.getAuthUser().should("contain.text", "Super admin")

        // POP Up message displayed 
        cy.contains('Login successful!').should('be.visible')

    })

    it('Verify that the user cannot login with invalid email', () => {

        cy.fixture('users.json').then((users) => {

            const user = users[1]

            loginpage.getEmail(user.email)
            loginpage.getPassword(user.password)
            loginpage.getSignInButton().click()
    
            // Verify that an invalid email error message is displayed
            cy.contains('The selected email is invalid.').should('be.visible')

        })



    })

    it('Verify that the user cannot login with wrong password', () => {



        cy.fixture('users.json').then((users) => {

            const user = users[2]

            loginpage.getEmail(user.email)
            loginpage.getPassword(user.password)
            loginpage.getSignInButton().click()
    
            // Verify that an invalid email error message is displayed
            cy.contains('Wrong password').should('be.visible')

        })

    })

    it('Verify if user can logout successfully', () => { 

        cy.fixture('users.json').then((users) => {

            const user = users[0]

            loginpage.getEmail(user.email)
            loginpage.getPassword(user.password)
            loginpage.getSignInButton().click()
    
            loginpage.getLogoutButton().click()
    
            // Verify if user is back to the sign in page
            cy.contains('Please sign in to your account').should('be.visible')

        })

    })


})