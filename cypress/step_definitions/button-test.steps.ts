import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('User clicks on the button and verifies the changed title', () => {
  cy.visit('https://cypress-github-actions.web.app/');
  cy.getByCy('title').should('contain.text', 'Hello');
  cy.getByCy('click-me-button').click();
  cy.getByCy('title').should('contain.text', 'Cypress Github Actions Demo!');
});
