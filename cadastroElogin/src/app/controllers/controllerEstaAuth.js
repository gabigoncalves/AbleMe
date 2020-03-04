const express = require('express');
const router = express.Router();

// caso usuário estiver autenticado
const estaAuth = async (req, res) => {
    res.send({ ok: true, user: req.userId})
}

module.exports = { estaAuth }
