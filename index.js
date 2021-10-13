require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT

const app = express()

app.listen(PORT, () => console.log(`Setver staryed on port ${PORT}`))