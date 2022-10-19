import { Component, OnInit } from '@angular/core';
import {UsuariosService,Usuario} from '../../Services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-usuario',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario: Usuario={
    id:'',
    nombre:'',
    usuario:'',
    password:'',
    fecha:'19-10-22',
    tipo:''
  }

  constructor(private UsuariosService:UsuariosService,private router:Router) { }

  ngOnInit(): void {
  }

  loguearse(){
    this.router.navigate(["login"]);
  }

  addNewUsuario(){
    delete this.usuario.id;

    this.UsuariosService.addUsuario(this.usuario).subscribe();
    this.router.navigate(["catalogo"]);
  }

}
