describe('Recommendation list', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have as title: Recommended', () => {
    cy.get('.page .container-top .title')
      .should('be.visible')
      .contains('Recommended')
  });

  it('should have a list of, exactly, 4 links to recommendations', () => {
    cy.get('.page .container-top .recommendations').children()
      .should('be.visible')
      .should('have.length', 2)
  });

});
