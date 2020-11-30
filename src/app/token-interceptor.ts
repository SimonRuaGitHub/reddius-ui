
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { catchError } from 'rxjs/operators';
import resourcePath from "./config/reddius-api-endpoint/resource-paths.json";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{

    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(public authService: AuthService){

    }
     
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          console.log('Intercepting http request');
         
          if(!req.url.includes(resourcePath.loginPath) &&
             !req.url.includes(resourcePath.refreshTokenPath) &&
             !req.url.includes(resourcePath.signupPath)){

                console.log('Adding Jwt Token to any request url different to any API authentication path '+req.url);

                const jwtToken = this.authService.getJwtToken();

                if(jwtToken){
                   return next.handle(this.addToken(req, jwtToken)).pipe(catchError(selector => {
                       if(selector instanceof HttpErrorResponse && selector.status === 403){
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

       if(!this.isTokenRefreshing){
           this.isTokenRefreshing = true;
           this.refreshTokenSubject.next(null);
       }

       return null;
    }

    private addToken(req: HttpRequest<any>, jwtToken: any) {
        return req.clone({
            headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
        });
    }
}