describe('Manifesting Web...', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Get Web Components...', () => {
    cy.get('h1').contains('큐브 사용 예약하기');
  });
});
