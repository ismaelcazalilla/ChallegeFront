describe('Recommendation list', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have as title: Recommended', () => {
    cy.get('#recommended-list h2')
      .should('be.visible')
      .contains('Recommended')
  });

  it('should have a list of, exactly, 2 recommendations', () => {
    cy.get('#recommended-list a')
      .should('be.visible')
      .should('have.length', 2)
  });

});
