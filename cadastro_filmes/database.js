 // Conexão com o banco de dados
const pg = require('pg')

const conexao = new pg.Client("postgresql://vinicius_porcincula:Z_A1iySdW7ErC4m9FASy0g@databasecluster-2809.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full")

// conexao.connect()
//     .then(() => {
//         console.log('Banco de dados conectou')
//     })
//     .catch((erro) => {
//         console.log(erro)
//     })

// try {
//     await conexao.connect()
//     console.log('Banco de dados conectou')
// } catch (erro) {
//     console.log('Erro ao conectar no banco de dados')
//     console.log(erro)
// }


conexao.connect()
.then(
    () => console.log('Banco de dados conectou')
)
.catch(
    (erro) => {
        console.log('Erro ao conectar no banco de dados')
        console.log(erro)
    }
)

module.exports = conexao