const rutas = require('express').Router();
const conexion = require('./BD/conexion');
//Asignación de todas las rutas del API para hacer consultar del lado del cliente

//Obtener todos los campos de una tabla
rutas.get('/', function(pet,resp){
    let query = "select * from usuarios"
    conexion.query(query,(err,rows,fields)=>{
        if(err){
            console.log("Error durante consulta get: "+err);
        }else{
            resp.json(rows);
        }
    })
    //resp.send('Respuesta de rutas/inicio');
})

//Obtener todos los campos de un registro en particular
rutas.get('/:id', function(pet,resp){
    const {id} = pet.params;
    let query = `select * from usuarios where id = ${id}`;
    conexion.query(query,(err,rows,fields)=>{
        if(err){
            console.log("Error durante consulta get: "+err);
        }else{
            resp.json(rows);
        }
    })
})

//Obtener todos los campos de un registro para LOGIN
rutas.post('/login', function(pet,resp){
    const {usuario,password} = pet.body;
    let query = `select * from usuarios where usuario = '${usuario}' and password = '${password}'`;
    conexion.query(query,(err,rows,fields)=>{
        if(err){
            console.log("Error durante consulta post: "+err);
        }else{
            resp.json(rows);
        }
    })
})

//Guardar todos los datos de un registro en BD
rutas.post('/', function(pet,resp){
    const {nombre,usuario,password,fecha,tipo} = pet.body;
    let query = `insert into usuarios(nombre,usuario,password,fecha,tipo) values('${nombre}','${usuario}','${password}','${fecha}','${tipo}')`;
    conexion.query(query,(err,rows,fields)=>{
        if(err){
            console.log("Error durante consulta get: "+err);
        }else{
            resp.json({status: 'Usuario añadido con éxito'});
        }
    })
})

//Eliminar todos los datos de un registro en BD
rutas.delete('/:id', function(pet,resp){
    const {id} = pet.params;
    let query = `delete from usuarios where id = ${id}`;
    conexion.query(query,(err,rows,fields)=>{
        if(err){
            console.log("Error durante consulta delete: "+err);
        }else{
            resp.json({status: 'Usuario eliminado con éxito'});
        }
    })
})

//Modificar todos los datos de un registro en BD
rutas.put('/:id', function(pet,resp){
    const {id} = pet.params;
    const {nombre} = pet.body;
    let query = `update usuarios set nombre='${nombre}' where id = ${id}`;
    conexion.query(query,(err,rows,fields)=>{
        if(err){
            console.log("Error durante consulta delete: "+err);
        }else{
            resp.json({status: 'Usuario modificado con éxito'});
        }
    })
})

module.exports = rutas;