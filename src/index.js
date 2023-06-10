const app = require('./app');
const PORT = 5500;

const dataBase= require('./database');
dataBase.Conncet()


app.listen(PORT, ()=>{
    console.log(`Servidor, porta ${PORT}`);
})