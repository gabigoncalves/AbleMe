const express = require('express')
const router = express.Router()
const { all, remove, findByPlaceId, createAndUpdate } = require('./controller')

//exibir todos
router.get('/', all)

//exibir um pelo id determinado
router.get('/:place_id', findByPlaceId)

// criar e atualizar 
router.post('/:place_id', createAndUpdate)

//remover um pelo id determinado
router.delete('/:place_id', remove)


module.exports = router
