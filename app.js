const express = require('express')
const app = express()


//const PORT = process.env.PORT || 3000
const PORT = process.env.PORT || 5000


app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1.4') // change this string to ensure a new version deployed
})

app.listen(PORT, '0.0.0.0' ,() => {
  //eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
