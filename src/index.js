const app = require('./app');
const PORT = 5500

app.listen(PORT, ()=>{
    console.log(`Servidor, porta ${PORT}`);
})