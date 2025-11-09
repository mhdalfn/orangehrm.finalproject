import LoginPage from '../../pages/LoginPage'
import DirectoryPage from '../../pages/DirectoryPage'
import { LoginData } from '../../data/LoginData'
import { DirectoryData } from '../../data/DirectoryData'

describe('Directory Feature - OrangeHRM', () => {

    beforeEach(() => {
        // Login sebelum tiap test
        LoginPage.interceptDashboard()
        LoginPage.login(LoginData.validUser.username, LoginData.validUser.password)
        cy.wait('@getLocations')
        LoginPage.verifyDashboardPage()

        // ke menu Directory
        DirectoryPage.interceptDirectory()
        DirectoryPage.visitDirectory()
        DirectoryPage.waitForDirectory()
        DirectoryPage.verifyDirectoryPage()
    })

    it('TC01 - Search employee using valid data', () => {
        DirectoryPage.enterEmployeeName(DirectoryData.validEmployee.searchKey, DirectoryData.validEmployee.fullName)
        DirectoryPage.clickSearchButton()
        DirectoryPage.waitForDirectory()
        DirectoryPage.verifyEmployeeFound(DirectoryData.validEmployee.fullName)
    })

    it('TC02 - Search employee using invalid data', () => {
        DirectoryPage.enterEmployeeName(
        DirectoryData.invalidEmployee.searchKey
    )
    DirectoryPage.clickSearchButton()
    DirectoryPage.waitForDirectory()
    cy.contains('Invalid').should('be.visible')
    })

    it('TC03 - Filter employee from Job Title', () => {
        DirectoryPage.selectJobTitle(DirectoryData.jobFilter.title)
        DirectoryPage.clickSearchButton()
        DirectoryPage.waitForDirectory()
        DirectoryPage.verifyEmployeeFoundByJob(DirectoryData.jobFilter.title)
    })

    it('TC04 - Filter employee from Location', () => {
        DirectoryPage.selectLocation(DirectoryData.locationFilter.name)
        DirectoryPage.clickSearchButton()
        DirectoryPage.waitForDirectory()
        DirectoryPage.verifyEmployeeFoundByLocation(DirectoryData.locationFilter.name)
    })

    it('TC05 - Reset filter', () => {
        DirectoryPage.enterEmployeeName(DirectoryData.validEmployee.searchKey, DirectoryData.validEmployee.fullName)
        DirectoryPage.clickSearchButton()
        DirectoryPage.clickResetButton()
        DirectoryPage.getEmployeeNameInput().should('have.value', '')
    })
})
