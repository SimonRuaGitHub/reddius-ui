import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import  Environment from '../config/reddius-api-endpoint/domain.json';
import  ResourcePath from '../config/reddius-api-endpoint/resource-paths.json';
import { VoteModel } from '../shared/vote-model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  public votePost(voteModel:VoteModel): Observable<HttpResponse<any>>{
       return this.http.post<HttpResponse<any>>(Environment.dnsDev.concat(ResourcePath.vote), voteModel);
  }
}
