import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginResponse } from '../payloads/login-response.payload';

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

  public getJwtToken() {
    console.log('jwt: '+AuthStorageService.localStorageService.retrieve('authenticationToken').toString());
    return AuthStorageService.localStorageService.retrieve('authenticationToken');
  } 

 public getRefreshToken() {
     return AuthStorageService.localStorageService.retrieve('refreshToken');
  }

 public getUsername(){
   return AuthStorageService.localStorageService.retrieve('username');
 }
}
