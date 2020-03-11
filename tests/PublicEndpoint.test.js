const PublicEndpoint = require('../src/PublicEndpoint')

describe('PublicEndpoint', () => {
  it('should not do anything because it is under construction', (done) => {
    const myEndpoint = new PublicEndpoint('', '', done)
    myEndpoint.successResponse({}, {}, 200)
  })
})
