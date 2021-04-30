describe('User', () => {
  it('is logged out', () => {
    cy.visit('/students/')
      .window()
      .its('$nuxt')
      .its('$store.$auth.state.loggedIn')
      .should('equal', false);
  });
});
