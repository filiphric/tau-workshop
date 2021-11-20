beforeEach( () => {

  cy
    .visit(); // ⚠️ add ID of your board

});

// ⚠️ before you do these challenges, create a couple of cards first 

// #1 try to use .contains() command to select different cards in our app. try to use contains as a parent and as a child command
it('selecting a card', () => {



});

// #2: assert all texts using .then() command
it('assert card texts', () => {

})

// #3: check a couple of checkboxes and then use .then() and expect() to assert the state of those checkboxes
it('assert card checked state', () => {

});

// #4 try out the difference between .then() and .should(). assert texts of cards and then reorder them to make test pass 
it('assert card texts using .should() command', () => {

  cy
    .get('[data-cy="card"]', { timeout: 30000 })
    .then( cards => { // see how behavior changes if you change .then() to .should()

      // check e.g. card texts

    })

});