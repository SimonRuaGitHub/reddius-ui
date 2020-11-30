import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from '../../payloads/SignupRequestPayload';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../shared/styles/auth.form.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequestPayload: SignupRequestPayload;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { 
      this.signupRequestPayload = {
          username: '',
          email: '',
          password: ''
      };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
                      username: new FormControl('', Validators.required),
                      email: new FormControl('', [Validators.required, Validators.email]),
                      password: new FormControl('', [Validators.required])
    });
  }

  signup(){
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;

        this.authService.signup(this.signupRequestPayload).subscribe(() => {
            console.log("Singnup Successful");
            this.router.navigate(['/login'],{ queryParams: { registered: 'true' } });
        }, () => {
            console.log("Signup Failed");
            this.toastr.error('Registration Failed! Please try again');
        });
  }

}
