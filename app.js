const express = require('express')
const app = express()


//const PORT = process.env.PORT || 3000
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, '0.0.0.0' ,() => {
  //eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
