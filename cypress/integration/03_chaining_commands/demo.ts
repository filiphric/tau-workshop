beforeEach(() => {

  cy
    .visit('/board/40783832112')

})

it.only('Command timeout', () => {

  cy
    .get('[data-cy=card]')
    .should('have.length', 2)

});

it('Chaining commands', () => {

  cy
    .contains('milk')

});

it('Multiple assertions', () => {

  cy
    .get('[data-cy=card]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=card]')
    .eq(1)
    .should('contain.text', 'milk')

})