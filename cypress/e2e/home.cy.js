describe('Home', () => {

  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should have a header with h1', () => {
    cy.get('.header').should('be.visible');
    cy.get('.header h1').should('be.visible');
  });

  it('should have page with top and bottom container', () => {
    cy.get('main .container-top').should('be.visible');
    cy.get('main .container-bottom').should('be.visible');
  });

});
