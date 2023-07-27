describe('Make Appointment Test', () => {
    beforeEach(() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login")
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    })
  
    it('Make Appointment Success', () => {
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#txt_visit_date').type('30/07/2023')
        cy.get('#radio_program_medicaid').click()
        cy.get('#txt_comment').type('Test Cypress')
        cy.get('#btn-book-appointment').click()

        cy.get('#summary').should('be.visible')
        cy.get('#facility').invoke('text').should('eql', 'Hongkong CURA Healthcare Center')
        cy.get('#hospital_readmission').invoke('text').should('eql', 'Yes')
        cy.get('#program').invoke('text').should('eql', 'Medicaid')
        cy.get('#visit_date').invoke('text').should('eql', '30/07/2023')
        cy.get('#comment').invoke('text').should('eql', 'Test Cypress')
    })
  
    it('Make Appointment Failed, Not Input Date', () => {
        cy.get('#btn-book-appointment').click()
        cy.get('#appointment').should('be.visible')
        cy.get('#summary').should('not.exist');
    })
  })