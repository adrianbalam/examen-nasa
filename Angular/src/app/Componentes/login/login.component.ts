import { Component, OnInit } from '@angular/core';
import {UsuariosService,Usuario} from '../../Services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-usuario',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario={
    id:'0',
    nombre:'0',
    usuario:'',
    password:'',
    fecha:'0',
    tipo:'0'
  }

  constructor(private UsuariosService:UsuariosService,private router:Router) { }

  ngOnInit(): void {
  }

  getUsuarioLogin(){
    this.UsuariosService.getUsuarioLogin(this.usuario).subscribe(
      res => {
      let resp = JSON.stringify(res);
      if(resp.includes(this.usuario.usuario) && resp.includes(this.usuario.password)){
        this.router.navigate(["catalogo"]);
      }
      },
      err => console.log(err)
    );
  }

}
