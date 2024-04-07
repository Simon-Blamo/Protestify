import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://csc415-server22.hpc.tcnj.edu:3001";
  private readonly auth_token_key = 'auth_token'
  return_response: any;
  decoded: any

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  add_user(data: any){
    return this.http.post(this.url+'/api/v1/users/creation', data, this.httpOptions)
  }

  auth_user(data: any){
    return this.http.post(this.url+'/api/v1/users/auth', data)
  }

  check_email(email: any){
    return this.http.get(this.url+'/api/v1/users/access_emails/'+email)
  }

  check_username(username: any){
    return this.http.get(this.url+'/api/v1/users/access_usernames/'+ username)
  }

  get_token(){
    return localStorage.getItem(this.auth_token_key)
  }

  get_total_amount_of_users(){
    return this.http.get(this.url+'/api/v1/users/total');
  }

  get_user_rallies(data: any){
    return this.http.post(this.url + '/api/v1/users/rallies', data)
  }

  get_user_role(){
    const token = this.get_token()
    if(token) {
      this.decoded = jwtDecode(token)
      return this.decoded.value.is_admin;
    } else {
      return false;
    }
  }

  get_value_from_token(data: any){
    const token = this.get_token()
    if(token){
      this.decoded = jwtDecode(token)
      return this.decoded.value[data]
    }
  }

  is_logged_in(){
    const token = this.get_token()
    if(token){
      return true;
    }
    return false;
  }

  login_user(data: any){
    return this.http.post(this.url+'/api/v1/users/login', data).pipe(
      tap(response => {
        this.return_response = response
        this.decoded = jwtDecode(this.return_response.token)
        if(this.return_response && this.return_response.token){
          localStorage.setItem(this.auth_token_key, this.return_response.token);
        }
      })
    )
  }

  logout_user(){
    localStorage.removeItem(this.auth_token_key);
    this.router.navigate([''])
  }


  print_token(){
    const token = this.get_token()
    if(token){
      this.decoded = jwtDecode(token)
      console.log(this.decoded.value)
    }
  }

  update_token(){
    const token = this.get_token()
    
    if(token){
      this.decoded = jwtDecode(token)
      this.http.post(this.url+'/api/v1/session/token_update', this.decoded.value).subscribe(
        response => {
          this.return_response = response
          this.decoded = jwtDecode(this.return_response.token)
          if(this.return_response && this.return_response.token){
            localStorage.setItem(this.auth_token_key, this.return_response.token);
          }
        }
      )
    }
  }
}
