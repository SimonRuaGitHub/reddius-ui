import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PostModel } from '../shared/post-model';
import ResourcePath from '../config/reddius-api-endpoint/resource-paths.json';
import EnvironmentDns from '../config/reddius-api-endpoint/domain.json';
import { PostRequest } from '../payloads/post-request-payload';
import { URL_API_ENDPOINTS } from '../config/reddius-api-endpoint/configure-api-endpoints';
import { map} from 'rxjs/operators';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAllPosts():Observable<Array<PostModel>>{
       return this.http.get<Array<PostModel>>(EnvironmentDns.dnsDev.concat(ResourcePath.Allposts));
  }

  public getPost(id:number): Observable<PostModel>{
       return this.http.get<PostModel>(EnvironmentDns.dnsDev.concat(ResourcePath.post.replace( "{id}", id.toString() ) ) );
  }

  public savePost(createPostPayload:PostRequest): Observable<boolean>{
         return this.http.post<HttpResponse<boolean>>(URL_API_ENDPOINTS.createPost, createPostPayload, {observe: "response"}).pipe(map(response => {

                 console.log("Http response received: "+response);

                 if(response.status != 201){
                    return true;
                 }else{
                    throwError(response);
                 }
         }));
  }

  public getAllPostsByUser(username:string):Observable<Array<PostModel>>{
         console.log(username);
         console.log(URL_API_ENDPOINTS.userPosts.replace("{username}",username));
         return this.http.get<Array<PostModel>>( URL_API_ENDPOINTS.userPosts.replace("{username}",username) );
  }

}
