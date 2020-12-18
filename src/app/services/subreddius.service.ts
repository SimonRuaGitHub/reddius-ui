import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubreddiusModel } from '../shared/subreddius-model';
import { URL_API_ENDPOINTS } from '../config/reddius-api-endpoint/configure-api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class SubreddiusService {

  constructor(private http:HttpClient) {}

  public getAllSubreddius():Observable<Array<SubreddiusModel>>{
         return this.http.get<Array<SubreddiusModel>>(URL_API_ENDPOINTS.allSubreddiuses);
  }

  public createSubreddius(subreddiusModel:SubreddiusModel){
         return this.http.post<SubreddiusModel>(URL_API_ENDPOINTS.createSubreddius, subreddiusModel);
  }
}
