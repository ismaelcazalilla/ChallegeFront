describe('Recommendation list', () => {

  beforeEach(() => {
    cy.visit('localhost:3000/');
  });

  it('should have as title "Recommended', () => {
    cy.get('.page .container-top .title')
      .should('be.visible')
      .contains('Recommended')
  });

  it('should have a list of, exactly, 4 links to recommendations', () => {
    cy.get('.page .container-top .recommendations a')
      .should('be.visible')
      .should('have.length', 4)
  });

});
