const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
app.use(cors({ origin: true }))

app.use(express.static('./public'))


app.listen(port, () => (console.log("listening on port" + port)))