import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { SignupRequestPayload } from '../payloads/SignupRequestPayload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import dns from "../config/reddius-api-endpoint/domain.json";
import resourcePath from "../config/reddius-api-endpoint/resource-paths.json";
import { LoginRequestPayload } from '../payloads/loginRequestPayload';
import { LoginResponse } from '../payloads/login-response.payload';
import { LocalStorageService } from 'ngx-webstorage'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private localStorageService:LocalStorageService){}

  public signup(signupRequestPayload: SignupRequestPayload): Observable<any> {

     return this.http.post(dns.dnsDev.concat(resourcePath.signupPath), signupRequestPayload,{responseType: "text"} );
  }

  public login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
         return this.http.post<LoginResponse>(dns.dnsDev.concat(resourcePath.loginPath), loginRequestPayload)
                         .pipe(map(loginResponse => {
                           
                               this.localStorageService.store('authenticationToken',loginResponse.authenticationToken);
                               this.localStorageService.store('username',loginResponse.username);
                               this.localStorageService.store('refreshToken',loginResponse.refreshToken);
                               this.localStorageService.store('expiresAt',loginResponse.expiresAt);
        
                               return true;
                         }));
  }

  public getJwtToken() {
     return this.localStorageService.retrieve('authenticationToken');
  } 

  public getRefreshToken() {
      return this.localStorageService.retrieve('refreshToken');
  }
}
