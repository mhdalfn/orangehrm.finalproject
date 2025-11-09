class DirectoryPage {

    // ==== ELEMENTS ====
    getDirectoryMenu() {
        return cy.get('a[href="/web/index.php/directory/viewDirectory"]')
    }

    getEmployeeNameInput() {
        return cy.get('input[placeholder="Type for hints..."]')
    }

    getJobTitleDropdown() {
        return cy.get('.oxd-select-text-input').eq(0)
    }

    getLocationDropdown() {
        return cy.get('.oxd-select-text-input').eq(1)
    }

    getSearchButton() {
        return cy.get('button[type="submit"]')
    }

    getResetButton() {
        return cy.get('button[type="reset"]')
    }

    getDirectoryHeader() {
        return cy.get('h6').contains('Directory')
    }

    // ==== INTERCEPTS ====
    interceptDirectory() {
        cy.intercept('GET', '**/api/v2/directory/employees*').as('getDirectory')
    }

    // ==== ACTIONS ====
    visitDirectory() {
        this.getDirectoryMenu().click()
    }

    enterEmployeeName(searchKey, fullName) {
    this.getEmployeeNameInput().type(searchKey)

    if (fullName) {
        cy.get('body').then($body => {
            if ($body.find('.oxd-autocomplete-option').length > 0) {
                if ($body.text().includes(fullName)) {
                    cy.contains('.oxd-autocomplete-option', fullName).click()
                } else {
                    cy.log(`Nama "${fullName}" tidak ditemukan di dropdown, lanjutkan pencarian kosong`)
                }
            } else {
                cy.log('Dropdown autocomplete tidak muncul')
            }
        })
    }
}

    selectJobTitle(title) {
        this.getJobTitleDropdown().click()
        cy.contains('.oxd-select-option', title).click()
    }

    selectLocation(location) {
        this.getLocationDropdown().click()
        cy.contains('.oxd-select-option', location).click()
    }

    clickSearchButton() {
        this.getSearchButton().click()
    }

    clickResetButton() {
        this.getResetButton().click()
    }

    // ==== ASSERTIONS ====
    verifyDirectoryPage() {
        cy.url().should('include', '/directory')
        this.getDirectoryHeader().should('be.visible')
    }

    verifyEmployeeFound(name) {
        cy.get('.orangehrm-directory-card-header')
            .should('contain.text', name)
    }

    verifyEmployeeFoundByJob(title) {
        cy.get('.orangehrm-directory-card-subtitle')
            .should('contain.text', title)
    }

    verifyEmployeeFoundByLocation(location) {
        cy.get('.orangehrm-directory-card-body')
            .should('contain.text', location)
    }

    waitForDirectory() {
        cy.wait('@getDirectory')
    }
}

export default new DirectoryPage()
