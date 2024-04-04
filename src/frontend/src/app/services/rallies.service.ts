import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RalliesService {

  url: string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient, private router: Router) { }


  change_rally_status(data: any){
    return this.http.post(this.url+'/api/v1/rallies/'+data.id, data)
  }

  create_rally(data: any){
    return this.http.post(this.url+'/api/v1/rallies', data)
  }

  get_total_amount_of_rallies(){
    return this.http.get(this.url + '/api/v1/rallies/')
  }

  list_rallies(data: any){
    return this.http.get(this.url + '/api/v1/rallies/' + data)
  }

  
}
