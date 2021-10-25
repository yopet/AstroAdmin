import { Injectable } from '@angular/core';
import { User } from '../../Modelo/User'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  user : User 
  roleAs: string[];
  Pages;
  constructor() { }

  login(value: string[]) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', JSON.stringify(this.roleAs));
    return { success: this.isLogin, role: this.roleAs };
  }

  logout() {
    this.isLogin = false;
    this.roleAs = null;
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return { success: this.isLogin, role: '' };
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = JSON.parse(localStorage.getItem('ROLE'));
    return this.roleAs;
  }
  getPages(){
    return this.Pages;
  }

  setPages(pages){
    this.Pages = pages
  }

  getUser(){
    return this.user;
  }

  setUser(user){
    this.user = user
  }


}
