var request = require('superagent')

function getApod (callback) {
  request
    .get('https://api.nasa.gov/planetary/apod?api_key=RHpVzzSLOU4DXoxv4wNQXSLqBORvpMrNzLq9V4Ub')
    .end((err, res) => {
      callback(res.body)
    })
}

getApod(function ({title, date, url}) {
  console.log(`title: ${title}, date: ${date} url: ${url}`)
})

module.exports = {
  getApod
}
