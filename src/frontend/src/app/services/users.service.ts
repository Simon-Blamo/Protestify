import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  add_user(data: any){
    return this.http.post(this.url+'/api/v1/users', data, this.httpOptions)
  }

}
