describe('Recommendation', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a link to "/detail"', () => {
    cy.get('#recommended-list a').first()
      .should('have.attr', 'href', '/detail/616d912b807e01aaeea0e411')
  });

  it('should have an image', () => {
    cy.get('#recommended-list img').first()
      .should('have.attr', 'src')
  });

  it('should navigate to detail when link is clicked', () => {
    cy.get('#recommended-list a').first().click()
    
    cy.url().should('contains', '/detail/616d912b807e01aaeea0e411')

  });
});
