const {Pool} = require('pg');

const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database: 'Movies',
    password: process.env.KEYDATABSE,
    port:5432
});

class DataBse {
    async  Conncet (){
        await pool.connect()
        .then((ress) => {
            console.log('Conectado com sucesso ao pg ' );
        }).catch((err) => {
            console.log('Erro ao conectar ao pg');
        });
    }
}




module.exports = new DataBse()