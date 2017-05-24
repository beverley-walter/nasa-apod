var request = require('superagent')

function getApod (callback) {
  request
    .get('https://api.nasa.gov/planetary/apod?api_key=RHpVzzSLOU4DXoxv4wNQXSLqBORvpMrNzLq9V4Ub')
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

getApod(function (error, {title, date, url}) {
  console.log(`title: ${title}, date: ${date} url: ${url}`)
})

module.exports = {
  getApod
}
