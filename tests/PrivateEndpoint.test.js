const PrivateEndpoint = require('../src/PrivateEndpoint')

describe('PrivateEndpoint', () => {
  it('should not do anything because it is under construction', (done) => {
    const myEndpoint = new PrivateEndpoint('', '', done)
    myEndpoint.successResponse({}, {}, 200)
  })
})
