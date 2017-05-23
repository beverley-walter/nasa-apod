var request = require('superagent')

function getApod (callback) {
  request
    .get('https://api.nasa.gov/planetary/apod?api_key=RHpVzzSLOU4DXoxv4wNQXSLqBORvpMrNzLq9V4Ub')
    .end((err, res) => {
      callback(res.body)
    })
}

getApod(console.log)

module.exports = {
  getApod
}
