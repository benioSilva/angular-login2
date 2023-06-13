import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-cadastrados',
  templateUrl: './lista-cadastrados.component.html',
  styleUrls: ['./lista-cadastrados.component.css']
})
export class ListaCadastradosComponent implements OnInit {
  storageDados: any
  param: any

  constructor(private userSrv: UserService){
    this.storageDados = this.userSrv.getUserList()
  }

  ngOnInit(){
    
  }
 
  deletarUser(param: any){
    this.storageDados = this.storageDados.filter(function(element: any){
      return element.id != param
    })
    this.userSrv.setUserList(this.storageDados)
  }

  trocarStatus(param:any){
    let dadosUser = this.storageDados
    for (let index = 0; index < dadosUser.length; index++) {
      const element = dadosUser[index];
      if(element.id == param){
        if(element.status == 'Desativado'){
          element.status = 'Ativado'
        } else{
          element.status = 'Desativado'
        }
      }
      
    }
  }

  
}
