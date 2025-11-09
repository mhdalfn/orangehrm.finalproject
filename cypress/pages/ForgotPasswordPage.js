class ForgotPasswordPage {

    // ==== NAVIGATION ====
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    // ==== ELEMENTS ====
    getForgotPasswordLink() {
        return cy.get('.oxd-text.orangehrm-login-forgot-header')
    }

    getUsernameField() {
        return cy.get('input[name="username"]')
    }

    getResetButton() {
        return cy.get("button[type='submit']")
    }

    getRequiredFieldMessage() {
        return cy.get('.oxd-input-group__message')
    }

    // ==== INTERCEPTS ====
    interceptResetPassword() {
        cy.intercept('GET', '**/auth/sendPasswordReset**').as('sendPasswordReset')
    }

    // ==== ACTIONS ====
    clickForgotPassword() {
        this.getForgotPasswordLink().click()
    }

    typeUsername(username) {
        if (username !== '') {
            this.getUsernameField().type(username)
        }
    }

    clickResetButton() {
        this.getResetButton().click()
    }

    // ==== ASSERTIONS ====
    verifyResetPasswordSuccess() {
        cy.contains('Reset Password link sent successfully').should('be.visible')
    }

    verifyResetPasswordNotSent() {
        cy.contains('Reset Password link sent successfully').should('not.exist')
    }

    verifyRequiredField() {
        this.getRequiredFieldMessage().should('contain.text', 'Required')
    }

    verifyInterceptSuccess() {
        cy.wait('@sendPasswordReset').its('response.statusCode').should('eq', 200)
    }
}

export default new ForgotPasswordPage()
