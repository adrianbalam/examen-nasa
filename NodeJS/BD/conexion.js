const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'examen'
})

conexion.connect((err)=>{
    if(err){
        console.log("Error al conectar a la BD: "+err);
    }else{
        console.log("¡Conexión exitosa!");
    }
})

module.exports = conexion;