describe('header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('/worksに遷移する', () => {
    cy.findByTestId('navigation-Work').scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', '/work');
  });

  it('/articleに遷移する', () => {
    cy.findByTestId('navigation-Article').scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', '/article');
  });

  it('/に遷移する', () => {
    cy.findByTestId('navigation-Top').scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', '/');
  });
})

export {}