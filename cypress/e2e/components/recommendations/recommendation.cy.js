describe('Recommendation', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a link to "/detail"', () => {
    cy.get('.recommendations a').first()
      .should('have.attr', 'href', '/detail')
  });

  it('should have an image', () => {
    cy.get('.recommendations img').first()
      .should('have.attr', 'src')
  });

  it('should navigate to detail when link is clicked', () => {
    cy.get('.recommendations a').first().click()
    
    cy.url().should('contains', '/detail')

  });
});
