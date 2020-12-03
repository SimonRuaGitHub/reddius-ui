
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import resourcePath from "./config/reddius-api-endpoint/resource-paths.json";
import { LoginResponse } from './payloads/login-response.payload';
import { AuthStorageService } from './services/storage/auth-storage.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService,private authStorageService: AuthStorageService){
    }
     
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          console.log('Intercepting http request');
         
          if(!req.url.includes(resourcePath.loginPath) &&
             !req.url.includes(resourcePath.refreshTokenPath) &&
             !req.url.includes(resourcePath.signupPath)){

                console.log('Adding Jwt Token to any request url different to any API authentication path '+req.url);

                const jwtToken = this.authStorageService.getJwtToken();

                if(jwtToken){
                   return next.handle(this.addToken(req, jwtToken)).pipe(catchError(selector => {
                         
                       console.log("selector status: "+selector.status)

                       if(selector instanceof HttpErrorResponse && selector.status == 403){
                             return this.handleAuthError(req, next);
                       }else{
                             return throwError(selector);
                       }         
                  } ));
                }
          }    

          return next.handle(req);
    }

    private handleAuthError(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          console.log('Calling refresh token');

          return this.authService.refreshToken().pipe(switchMap((refreshTokenResponse: LoginResponse) => {

               console.log('Refresh Token response '+refreshTokenResponse.authenticationToken.toString());
            
               return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
           }));

    }

    private addToken(req: HttpRequest<any>, jwtToken: any) {
        return req.clone({
            headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
        });
    }
}