import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RalliesService {

  url: string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  list_rallies(){
    return this.http.get(this.url + '/api/v1/rallies')
  }
}
