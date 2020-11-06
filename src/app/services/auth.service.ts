import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { SignupRequestPayload } from '../payloads/SignupRequestPayload';
import { Observable } from 'rxjs';
import dns from "../config/reddius-api-endpoint/domain.json";
import resourcePath from "../config/reddius-api-endpoint/resource-paths.json";
import { LoginRequestPayload } from '../payloads/loginRequestPayload';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  public signup(signupRequestPayload: SignupRequestPayload): Observable<any> {

     return this.http.post(dns.dnsDev.concat(resourcePath.signupPath), signupRequestPayload,{responseType: "text"} );
  }

  public login(loginRequestPayload: LoginRequestPayload): Observable<any>{
         return this.http.post(dns.dnsDev.concat(resourcePath.loginPath), loginRequestPayload);
  }
}
