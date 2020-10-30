module.exports = (request, response) => {
  response.json({
    time: Date.now(),
  })
}
