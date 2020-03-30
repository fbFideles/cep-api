const express = require('express')
const router = express.Router()

const { apiData } = require('./controllers/CepController')
 
router.get('/api/v1/cep', apiData)

module.exports = router