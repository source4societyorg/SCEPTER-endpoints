
const GenericHandler = require('@source4society/scepter-handlerutilities-lib')

class ServiceEndpoint extends GenericHandler {
  successResponse (data, headers, statusCode) {
    const defaults = {
      statusCode: 200,
      headers: {}
    }
    statusCode = this.utilities.valueOrDefault(statusCode, defaults.statusCode)
    headers = this.utilities.valueOrDefault(headers, defaults.headers)
    const response = {
      statusCode,
      headers,
      body: JSON.stringify(data)
    }
    this.callback(null, response)
  }

  errorResponse (error, headers, statusCode) {
    const defaults = {
      statusCode: 500,
      headers: {}
    }
    statusCode = this.utilities.valueOrDefault(statusCode, defaults.statusCode)
    headers = this.utilities.valueOrDefault(headers, defaults.headers)
    const response = {
      statusCode,
      headers,
      body: JSON.stringify(error)
    }
    this.callback(response)
  }
}

class PublicEndpoint extends ServiceEndpoint {}

class PrivateEndpoint extends ServiceEndpoint {}

module.exports.ServiceEndpoint = ServiceEndpoint
module.exports.PrivateEndpoint = PrivateEndpoint
module.exports.PublicEndpoint = PublicEndpoint
