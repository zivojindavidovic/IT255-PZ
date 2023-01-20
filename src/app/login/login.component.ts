import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;
  loggedIn: boolean;

  constructor(public authService: LoginServiceService) {
    this.message = "";
    this.loggedIn = false;
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Error';
    }else{
      this.loggedIn = true;
    }
    return false;
  }
  logout(): boolean {
    this.authService.logout();
    return false;
  }

}
