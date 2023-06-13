import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listLink = [
    { link: 'registrar', label: 'CRIAR CONTA' },
    { link: 'login', label: 'LOGIN' },
    { link: 'lista-cadastrados', label: 'CADASTROS' }
  ]

  constructor(private userSrv: UserService) { }

  ngOnInit() {

  }

}
