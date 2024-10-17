const database = require('../database.js')

const filmes = async (req, res) => {
    //metodo GET para listar toda a categoria 
    const resultado = await database.query('SELECT * FROM filmes')
    res.status(200).send({ mensagem: resultado.rows })
}
const categoria = async (req, res) => {
    const { categoria } = req.params
    if (!categoria) {
        return res.status(404).send({ mensagem: "categoria não encontrada "})
    }
    //metodo GET para listar categoria 
    const resultado = await database.query(`SELECT * FROM filmes where categoria = '${categoria}'`)
    res.status(200).send(resultado.rows)
}
const cadastrarFilme = async (req, res) => {
    //forma mais rapida
    const { titulo, categoria } = req.body
    //Validação
    if (!titulo || !categoria) {
        return res.status(404).send({ mensagem: "Esta faltando as informações" })
        //early return, caso não tenha os parametros  retorna erro 
    }
    // metodo post para cadastrar filmes
    const resultado = await database.query(`INSERT INTO filmes (titulo, categoria)VALUES ('${titulo}', '${categoria}');`)
    res.status(201).send({ mensagem: resultado.rows })
}
const alterarId = async (req, res) => {
    const id = req.params.id
    const { titulo, categoria } = req.body
    if (!titulo || !categoria) {
        return res.status(404).send({ mensagem: "As informações estão incompletas" })
        //early return, caso não tenha os parametros  retorna erro 
    }
     //forma mais simples 
    // const titulo = req.body.titulo
    // const categoria = req.body.categoria
    //metodo PUT para atualizar filme pelo ID
    const resultado = await database.query(`UPDATE filmes SET titulo = '${titulo}', categoria = '${categoria}' WHERE id = ${id};`)
    res.status(201).send({ mensagem: resultado.rows })
}
const deletar = async (req, res) => {
    const id = Number(req.params.id)
    //Metodo para DELETAR
    const resultado = await database.query(`DELETE FROM filmes WHERE id = '${id}'`)
    res.status(201).send({ mensagem: resultado.rows })
}


// Exportar diversas variaveis
module.exports = { filmes, categoria, cadastrarFilme, alterarId, deletar }