describe
('Form input', () => {
  it('Focus the input on load', () => {
    cy.visit('/');
    cy.focused().should('have.id', 'busca')
  });
});
