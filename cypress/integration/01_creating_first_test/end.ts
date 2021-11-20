it('Creating first test', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

});

it('Checking a card', () => {

  cy
    .visit('/board/40783832112');

  cy
    .get('[data-cy="card-checkbox"]')
    .check();

});