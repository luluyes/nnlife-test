const errorHandler = (err, req, res,next ) => {
  const statusCode = res.statusCode === 200 ? 200 : 404;
  res.status(statusCode)
  res.json({
    message: err.message
  })
}

module.exports = {
  errorHandler
}