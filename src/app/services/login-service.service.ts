import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  loggedIn: boolean;

  constructor() { 
    this.loggedIn = false;
  }

  login(user: string, password: string): boolean{
    if(user === 'admin' && password ==='admin'){
      localStorage.setItem('username', user);
      this.loggedIn = true;
      return true;
    }
    return false;
  }
  getUser():any{
    return localStorage.getItem('username');
  }
  isLoggedIn(): boolean{
    if(this.loggedIn == true){
      return true;
    }
    return false;
  }
  logout():any{
    this.loggedIn = false;
    return localStorage.removeItem('username');
  }
}
