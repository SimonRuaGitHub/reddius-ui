import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginResponse } from 'src/app/payloads/login-response.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private static localStorageService:LocalStorageService;

  constructor(localStorageService:LocalStorageService) { 
    if(AuthStorageService.localStorageService == undefined){
       AuthStorageService.localStorageService = localStorageService;
    }
  }

  public storeAuthInfo(loginResponse:LoginResponse){
    AuthStorageService.localStorageService.store('authenticationToken',loginResponse.authenticationToken);
    AuthStorageService.localStorageService.store('username',loginResponse.username);
    AuthStorageService.localStorageService.store('refreshToken',loginResponse.refreshToken);
    AuthStorageService.localStorageService.store('expiresAt',loginResponse.expiresAt);
    AuthStorageService.localStorageService.store('userid',loginResponse.userid);
  }

  public clearAuthToken(){
    AuthStorageService.localStorageService.clear('authenticationToken');
    AuthStorageService.localStorageService.clear('expiresAt');
    AuthStorageService.localStorageService.clear('refreshToken');
  }

  public storeAuthToken(authenticationToken:string, expiresAt:number, refreshToken:string){
    AuthStorageService.localStorageService.store('authenticationToken', authenticationToken);
    AuthStorageService.localStorageService.store('expiresAt', expiresAt);
    AuthStorageService.localStorageService.store('refreshToken', refreshToken);
  }

  public clearAllAuthInfo():void{
          AuthStorageService.localStorageService.clear('authenticationToken');
          AuthStorageService.localStorageService.clear('username');
          AuthStorageService.localStorageService.clear('refreshToken');
          AuthStorageService.localStorageService.clear('expiresAt');
          AuthStorageService.localStorageService.clear('userid');
  }

  public getJwtToken() {
    return AuthStorageService.localStorageService.retrieve('authenticationToken');
  } 

 public getRefreshToken() {
     return AuthStorageService.localStorageService.retrieve('refreshToken');
  }

 public getUsername(){
     return AuthStorageService.localStorageService.retrieve('username');
 }

 public getUserId(){
     return AuthStorageService.localStorageService.retrieve('userid');
 }
}
