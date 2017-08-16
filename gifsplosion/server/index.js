
const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Full Stack - JavaScript listening on port ${port}!`)
})
