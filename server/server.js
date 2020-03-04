const express = require('express')
const app = express()
const port = 5000

let a = 0;

app.get('/api', (req, res) => res.send(`Hello World!${a++}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));