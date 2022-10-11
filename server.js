const express = require('express')
const app = express()
const port = process.env.PORT || 3030

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TESTING RENDER</title>
</head>
<body>
  <section>TESTING RENDER</section>
</body>
</html>
`

app.get('/', (req, res) => {
  res.type('html').send(html)
})
app.listen(port, () => console.log('server listening on port', port))
