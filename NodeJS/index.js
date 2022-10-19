require('./BD/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//Instancia de express
const app = express();

//Definir la estructura de datos a utilizar (Método POST)
app.use(express.json());

//Definiéndole a express un puerto
app.set('port',port);

//Rutas
app.use('/api',require('./rutas'));

//Iniciamos express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log("Error al iniciar servidor: "+err);
    }else{
        console.log("Conexión al servidor exitosa: "+port);
    }
});

