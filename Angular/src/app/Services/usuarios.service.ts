import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url="/api";

  constructor(private http:HttpClient) {
   }

  //Consultar todos los registros de la tabla
  getUsuarios(){
    return this.http.get(this.url);
  }

  //Consultar los registros de un usuario según ID
  getUnUsuario(id:string){
    return this.http.get(this.url+"/"+id);
  }

  //Consultar los registros de un usuario para LOGIN
  getUsuarioLogin(usuario:Usuario){
    return this.http.post(this.url+"/login",usuario);
  }

  //Añadir nuevo usuario
  addUsuario(usuario:Usuario){
    return this.http.post(this.url,usuario);
  }

  //Eliminar usuario por ID
  delUsuario(id:string){
    return this.http.delete(this.url+"/"+id);
  }

  //Editar usuario por ID
  editarUsuario(id:string,usuario:Usuario){
    return this.http.put(this.url+"/"+id,usuario);
  }

}

export interface Usuario{
  id?:string;
  nombre:string;
  usuario:string;
  password:string;
  fecha:string;
  tipo:string;
}
