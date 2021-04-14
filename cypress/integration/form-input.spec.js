describe
('Form input', () => {
  it('Focus the input on load', () => {
    cy.visit('/');
    cy.focused().should('have.id', 'busca')
  });

  it.only('Accepts input', () => {
    cy.visit('/');
    cy.get('#busca').type('Nova Tarefa');
  })
});
