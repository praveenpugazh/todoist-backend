import { constants } from '../constants.js'

const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Something went wrong'

  switch (errStatus) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: 'Validation Failed',
        success: false,
        message: errMsg,
        stackTrace: err.stack
      })
      break
    case constants.NOT_FOUND:
      res.json({
        title: 'Not Found',
        success: false,
        message: errMsg,
        stackTrace: err.stack
      })
    case constants.UNAUTHORIZED:
      res.json({
        title: 'Unauthorized',
        success: false,
        message: errMsg,
        stackTrace: err.stack
      })
    case constants.FORBIDDEN:
      res.json({
        title: 'Forbidden',
        success: false,
        message: errMsg,
        stackTrace: err.stack
      })
    case constants.SERVER_ERROR:
      res.json({
        title: 'Server Error',
        success: false,
        message: errMsg,
        stackTrace: err.stack
      })
    default:
      // console.log('No Error, All good !')
      break
  }
}

export default ErrorHandler
