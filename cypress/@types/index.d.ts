declare namespace Cypress {
  interface Chainable<Subject> {
      getByCy(dataCyAttribute: string, args?: any): Cypress.Chainable<JQuery>;
  }
}
