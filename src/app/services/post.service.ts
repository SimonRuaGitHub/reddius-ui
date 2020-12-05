import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../shared/post-model';
import ResourcePath from '../config/reddius-api-endpoint/resource-paths.json';
import EnvironmentDns from '../config/reddius-api-endpoint/domain.json';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAllPosts():Observable<Array<PostModel>>{
       return this.http.get<Array<PostModel>>(EnvironmentDns.dnsDev.concat(ResourcePath.Allposts));
  }

}
