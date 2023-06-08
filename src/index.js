const app = require('./app');
const PORT = 4001 || 8081;

app.listen(PORT, ()=>{
    console.log(`Servidor, porta ${PORT}`);
})