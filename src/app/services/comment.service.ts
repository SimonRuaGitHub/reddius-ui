import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API_ENDPOINTS } from '../config/reddius-api-endpoint/configure-api-endpoints';
import { CommentRequest } from '../payloads/comment-request.payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  public createComment(commentRequest:CommentRequest): Observable<boolean>{
         return this.http.post<HttpResponse<boolean>>(URL_API_ENDPOINTS.createComment, commentRequest, {observe: 'response'}).pipe(map(response => {
                    console.log("Http response received: "+response);

                    if(response.status != 201){
                        return true;
                    }else{
                        throwError(response);
                    }

         }))
  }
}
