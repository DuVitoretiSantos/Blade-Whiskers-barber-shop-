import mysql from 'mysql2'

const conexao = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'senai',
   database: 'BLADEWHISKERS'
})

conexao.connect()

export default conexao
