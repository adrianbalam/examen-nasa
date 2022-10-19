import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService, Usuario } from '../../Services/usuarios.service'

@Component({
  selector: 'catalogo-usuarios',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  //Arreglo con los datos de la BD
  ListaUsuarios:Usuario[]=[];

  constructor(private UsuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.UsuariosService.getUsuarios().subscribe(
      res => {
        console.log(res)
        this.ListaUsuarios=<any>res;
      },
      err => console.log(err)
    );
  }

}
