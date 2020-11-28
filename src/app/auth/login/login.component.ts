import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestPayload } from 'src/app/payloads/loginRequestPayload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/styles/auth.form.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;

  constructor(private authService: AuthService) { 
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
     this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
     });
  }

  login(){
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe((flagResponse) => {
      console.log("Login Successful")
      console.log(flagResponse)
    },() =>{
      console.log("Error requesting for login")
    },() => {
       console.log("Login requested");
    })
  }

}
