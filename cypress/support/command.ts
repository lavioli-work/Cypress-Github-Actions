Cypress.Commands.add('getByCy', (selector: string, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
