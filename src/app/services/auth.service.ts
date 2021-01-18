import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { SignupRequestPayload } from '../payloads/SignupRequestPayload';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import dns from "../config/reddius-api-endpoint/domain.json";
import resourcePath from "../config/reddius-api-endpoint/resource-paths.json";
import { LoginRequestPayload } from '../payloads/loginRequestPayload';
import { LoginResponse } from '../payloads/login-response.payload';
import { RefreshTokenPayload } from '../payloads/refresh-token.payload';
import { AuthStorageService } from './storage/auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private refreshTokenPayload: RefreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUsername()
  };

  constructor(private http: HttpClient, private authStorageService:AuthStorageService){}

  public signup(signupRequestPayload: SignupRequestPayload): Observable<any> {

     return this.http.post(dns.dnsDev.concat(resourcePath.signupPath), signupRequestPayload,{responseType: "text"} );
  }

  public login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
         return this.http.post<LoginResponse>(dns.dnsDev.concat(resourcePath.loginPath), loginRequestPayload)
                         .pipe(map(loginResponse => {
                           
                               this.authStorageService.storeAuthInfo(loginResponse);
        
                               return true;
                         }));
  }

  public getJwtToken() {
     return this.authStorageService.getJwtToken();
  } 

  public getRefreshToken() {
      return this.authStorageService.getRefreshToken();
  }

  public getUsername(){
    return this.authStorageService.getUsername();
  }

  public isLoggedIn():boolean{
         return this.authStorageService.getJwtToken() != null;
  }

  public refreshToken(): Observable<any>{
     return this.http.post(dns.dnsDev+resourcePath.refreshTokenPath,this.refreshTokenPayload)
                     .pipe(tap(response => {
                       this.authStorageService.clearAuthToken();

                       this.authStorageService.storeAuthToken(response.authenticationToken, response.expiresAt, response.refreshToken);
                     }));
  }

  public logout(){
      this.authStorageService.clearAllAuthInfo();
  }
}
