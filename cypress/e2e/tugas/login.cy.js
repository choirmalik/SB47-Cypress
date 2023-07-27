describe('Login Test', () => {
  beforeEach(() => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login")
  })

  it('Login Success', () => {
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('#appointment').should('be.visible')
  })

  it('Login Failed, Wrong Username', () => {
    cy.get('#txt-username').type('John Thor')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('be.visible')
    cy.get('.text-danger').invoke('text').should('contain', 'Login failed');
  })

  it('Login Failed, Wrong Password', () => {
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsAPassword')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('be.visible')
    cy.get('.text-danger').invoke('text').should('contain', 'Login failed');
  })

  it('Login Failed, Empty Username and Password', () => {
    cy.get('#txt-username').type('')
    cy.get('#txt-password').type('')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('be.visible')
    cy.get('.text-danger').invoke('text').should('contain', 'Login failed');
  })
})