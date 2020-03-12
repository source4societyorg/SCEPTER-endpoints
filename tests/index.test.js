const endpoints = require('../src/index')
const { PrivateEndpoint, PublicEndpoint, ServiceEndpoint } = endpoints

describe('PrivateEndpoint', () => {
  it('should not do anything because it is under construction', (done) => {
    const myEndpoint = new PrivateEndpoint('', '', done)
    myEndpoint.successResponse({}, {}, 200)
  })
})

describe('PublicEndpoint', () => {
  it('should not do anything because it is under construction', (done) => {
    const myEndpoint = new PublicEndpoint('', '', done)
    myEndpoint.successResponse({}, {}, 200)
  })
})

describe('ServiceEndpoint', () => {
  it('should trigger the handler callback with success when successResponse is called', (done) => {
    const mockCallback = (error, data) => {
      expect(error).toBe(null)
      expect(data).toEqual({
        statusCode: 200,
        body: '{}',
        headers: {}
      })
      done()
    }
    const myEndpoint = new ServiceEndpoint('', '', mockCallback)
    myEndpoint.successResponse({}, {}, 200)
  })

  it('should trigger the handler callback with error when errorResponse is called', (done) => {
    const mockCallback = (error, data) => {
      expect(error).toEqual({
        statusCode: 400,
        body: '{}',
        headers: {}
      })
      expect(typeof data).toBe('undefined')
      done()
    }
    const myEndpoint = new ServiceEndpoint('', '', mockCallback)
    myEndpoint.errorResponse({}, {}, 400)
  })
})
