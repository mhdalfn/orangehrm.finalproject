import { LoginData } from '../../data/LoginData'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'

describe('Forgot Password Test Suite', () => {

    beforeEach(() => {
        ForgotPasswordPage.visit()
        ForgotPasswordPage.clickForgotPassword()
    })

    it('TC01: Success Reset Password', () => {
        ForgotPasswordPage.typeUsername(LoginData.validUser.username)
        ForgotPasswordPage.interceptResetPassword()
        ForgotPasswordPage.clickResetButton()
        ForgotPasswordPage.verifyInterceptSuccess()
        ForgotPasswordPage.verifyResetPasswordSuccess()
    })


    it('TC02: Failed Reset Password Using Wrong Username', () => {
        ForgotPasswordPage.typeUsername(LoginData.invalidUser.username)
        ForgotPasswordPage.clickResetButton()
        ForgotPasswordPage.verifyResetPasswordNotSent()
    })


    it('TC03: Failed Reset Password Using Empty Username', () => {
        ForgotPasswordPage.clickResetButton()
        ForgotPasswordPage.verifyRequiredField()
    })


    it('TC04: Failed Reset Password Using Uppercase Username', () => {
        ForgotPasswordPage.typeUsername(LoginData.uppercaseUserPass.username)
        ForgotPasswordPage.clickResetButton()
        ForgotPasswordPage.verifyResetPasswordSuccess()
    })
})
