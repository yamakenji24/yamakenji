describe('workpage', () => {
  beforeEach(() => {
    cy.visit('/work', { retryOnStatusCodeFailure: true });
  });

  it('/に遷移する', () => {
    cy.findByTestId('navigation-Top').scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', '/');
  });

  it('/articleに遷移する', () => {
    cy.findByTestId('navigation-Article').scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', '/article');
  });

  it('/contactに遷移する', () => {
    cy.findByTestId('navigation-Contact').scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', '/contact');
  });
});

export {};
