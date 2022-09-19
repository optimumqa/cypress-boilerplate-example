describe('Login', () => {
  it('Should successfully log in', () => {
    cy.visitHome()
    cy.logIn()
    cy.url().should('include', '/inventory.html')
  })
})
