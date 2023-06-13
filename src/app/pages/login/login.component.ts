import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any
  constructor(private userSrv: UserService) {

  }

  ngOnInit() {

  }

  loginAtivo(form: any) {
    console.log(form.value)

    let cadastros = this.userSrv.getUserList()
    console.log(cadastros)
    cadastros = cadastros.filter(function (element: any) {
      console.log(element.username == form.value.userLogin)
      return element.username == form.value.userLogin
    })
    console.log(cadastros)
    console.log(cadastros.senha)
    if (cadastros[0].senha == form.value.senha) {

      window.location.href = 'http://localhost:4200/lista-cadastrados'
      return
    }
    alert('usuario ou senha não conferem')
  }
}


