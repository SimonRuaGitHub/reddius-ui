import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequestPayload } from 'src/app/payloads/loginRequestPayload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/styles/auth.form.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessfulMessage: string;
  isError: boolean;
  isErrorReg: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router:Router, private toastr:ToastrService) { 
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
     this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required])
     });

     this.activatedRoute.queryParams.subscribe(params => {
        if(params.registered !== undefined && params.registered == 'true')
        {
            this.toastr.success('Signup Successful');
            this.registerSuccessfulMessage = "Please check your inbox to activate your account";
        }
      });
  }

  login(){
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe((isSuccessfullResponse) => {
      console.log("Login Successful");
      console.log(isSuccessfullResponse);

      if(isSuccessfullResponse){
        this.isError = false;
        this.router.navigateByUrl('/');
        this.toastr.success('Login Successful');
      }else{
        this.isError = true;
      }
    },() =>{
      console.log("Error requesting for login");
      this.isError = true;
    },() => {
       console.log("Login requested");
    })
  }

}
