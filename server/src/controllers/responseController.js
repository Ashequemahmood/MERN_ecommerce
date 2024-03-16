const errorResponse = (res, {statusCode = 500, message = 'Internal server error'}) => {
    return res.status(statusCode).json({
        success: false,
        message: message
      })
}

const successResponse = (res, {statusCode = 200, message = 'Success', payload = {}}) => {
    return res.status(statusCode).send({
        success: true,
        message: message,
        payload,
      })
}

module.exports = {errorResponse, successResponse}