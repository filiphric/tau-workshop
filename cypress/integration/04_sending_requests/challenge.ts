// #1: create a board using cy.request() command
it('creating a board using api', () => {

  cy
    .visit('/')

})

// #2: create a list using cy.request() command. watch out! there are some required attributes
it('creating a list using api', () => {

  cy
    .visit() // ⚠️ add ID of your board

})

// #2: create a card using cy.request() command. watch out! there are some required attributes
it('creating a card using api', () => {

  cy
    .visit() // ⚠️ add ID of your board

})

// #4: rename a board using cy.request() command
it('renaming a board using api', () => {

  cy
    .visit('/')

})