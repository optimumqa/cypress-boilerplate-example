import { users, baseUrl } from '../../helpers'

const commands = {
  visitHome() {
    cy.visit(baseUrl)
  },
  logIn() {
    cy.get('#user-name').type(users.primary.name)
    cy.get('#password').type(users.primary.password)
    cy.get('#login-button').click()
  },
}

export default commands
