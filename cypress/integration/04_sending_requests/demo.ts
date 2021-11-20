it('creating new board', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

})