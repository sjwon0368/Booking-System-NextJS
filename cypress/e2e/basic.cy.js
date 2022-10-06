describe('Manifesting Web...', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Get Web Components...', () => {
    cy.get('h1').contains('Next.js Blog Theme');
  });
});
