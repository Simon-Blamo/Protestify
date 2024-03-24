import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  url: string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  login(
    credentials: {
      username: string;
      password: string
    }
  ){
    return this.http.post(this.url+'/api/v1/login', credentials)
  }
}
