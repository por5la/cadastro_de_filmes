const express = require('express')
const router = express.Router()
const controller = require('../controllers/filmes')

router.get('/filmes', controller.filmes)
router.get('/filmes/:categoria', controller.categoria)
router.post('/filmes/cadastrarFilme', controller.cadastrarFilme)
router.put('/filmes/:id', controller.alterarId)
router.delete('/filmes/:id', controller.deletar)

module.exports = router