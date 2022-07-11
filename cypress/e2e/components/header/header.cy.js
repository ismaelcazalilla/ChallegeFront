describe('Header', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have as title: Food recipes', () => {
    cy.get('nav.header h1')
      .should('be.visible')
      .contains('Food recipes')
  });

  it('should navigate to home when link is clicked', () => {
    cy.get('nav.header h1').first().click()
    
    cy.url().should('be.equal', 'http://localhost:3000/')
  });

});