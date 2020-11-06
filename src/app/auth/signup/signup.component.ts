import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from '../../payloads/SignupRequestPayload';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;
  private signupRequestPayload: SignupRequestPayload;

  constructor(private authService: AuthService) { 
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
                      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  signup(){
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;

        this.authService.signup(this.signupRequestPayload).subscribe(() => {
          
          console.log("Singnup Successful")
        }, () => {
          console.log("Signup Failed")
        });
  }

}
