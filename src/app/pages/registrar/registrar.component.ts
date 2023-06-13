import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  form: any = {}

  constructor(private userSrv: UserService) {

  }
  ngOnInit() {
    if (this.userSrv.getUserList().length == 0) {
      localStorage.removeItem('dadosRegistrados')
    }
  }

  validarUser(form: any): any{
    let dadosStorage = this.userSrv.getUserList()
    dadosStorage = dadosStorage.filter(function (element: any){
      return element.username == form.value.username
    })
    if(dadosStorage.length == 1){
      if(dadosStorage[0].username == form.value.username){
        return true
      }
    }
    
  }

  generateId(){
    return new Date().getTime()
  }

  onclickSalvar(form: any) {
    if (!this.form.username || !this.form.username.trim()) {
      return alert('preencher campo username')
    }

    if (!this.form.email || !this.form.email.trim()) {
      return alert('preencher campo email')
    }

    if (!this.form.senha || !this.form.senha.trim()) {
      return alert('preencher campo senha')
    }

    if (!this.form.repetirSenha || !this.form.repetirSenha.trim()) {
      return alert('preencher campo repetirSenha')
    }

    if(this.form.senha != this.form.repetirSenha){
      return alert ('senhas não conferem')
    } else if (this.validarUser(form)){
      return alert('usuario já cadastrado')
    } else {
      this.form.status = 'Desativado'
      this.form.id = (this.generateId())
      const storage = this.userSrv.getUserList()
        storage.push(this.form)
        this.userSrv.setUserList(storage)
        alert('usuario cadastrado')
        this.form = {}
      
      }
    }
  }


