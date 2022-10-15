import { users } from '../../support/helpers'

describe('Login', () => {
  it('Should successfully log in', () => {
    cy.visitHome()
    cy.logIn()
    cy.url().should('include', '/inventory.html')
  })

  it('Should not log in with non-existing user', () => {
    cy.visitHome()
    cy.logIn({
      username: users.nonExisting.name,
      password: users.nonExisting.password,
    })
    cy.get('[data-test="error"]').should('be.visible')
  })
})
