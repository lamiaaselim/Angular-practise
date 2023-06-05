import { Component , OnInit } from '@angular/core';
import {Login} from '../login';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginModel = new Login ("Lamiaa@gmail.com", "2311",true);

  constructor() {}

  ngOnInit() {}

  onLogin() {
    console.log(this.loginModel);
  }
}
