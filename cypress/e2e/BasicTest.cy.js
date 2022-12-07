describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    cy.contains('Add Element').click().click();
    cy.get('div[id="elements"]').children().its('length').should('equal', 2);
  })
})