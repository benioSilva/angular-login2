import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  listUser: any
  
  constructor() { }

  public getUserList(){
    return JSON.parse(localStorage.getItem('dadosRegistrados') || '[]')
  }

  public setUserList(listUser: any){
    return localStorage.setItem('dadosRegistrados', JSON.stringify(listUser))
  }
}
