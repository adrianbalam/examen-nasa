export class Usuario{
    id:number;
    nombre:String;
    usuario:String;
    fecha:String;
    tipo:String;

    constructor(id:number,nombre:String,usuario:String,fecha:String,tipo:String){
        this.id=id;
        this.nombre=nombre;
        this.usuario=usuario;
        this.fecha=fecha;
        this.tipo=tipo;
    }
}