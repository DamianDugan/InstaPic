import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  clientID: string = 'PAST YOUR CLIENT ID';
  baseUrl: string = 'http://localhost:8000';
  constructor(private http: HttpClient) {}
  search(queryString: string) {
    let _URL = this.baseUrl + queryString;
    return this.http.get(_URL);
  }
}
