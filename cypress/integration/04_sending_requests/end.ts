it('creating new board', () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'board created through api'
      }
    }).then( board => {

      expect(board.status).to.eq(201)
      expect(board.body.id).to.be.a('number')
      expect(board.body.name).to.be.a('string')

    })

  cy
    .visit('/');

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

})