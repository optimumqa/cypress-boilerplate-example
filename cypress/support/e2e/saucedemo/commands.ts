import { users, baseUrl } from '../../helpers'

const commands = {
  visitHome() {
    cy.visit(baseUrl)
  },
  logIn(data = {}) {
    cy.get('#user-name').type(data.username || users.primary.name)
    cy.get('#password').type(data.password || users.primary.password)
    cy.get('#login-button').click()
  },
}

export default commands
