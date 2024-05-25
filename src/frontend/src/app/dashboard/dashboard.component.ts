import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private user_service:UsersService){

  }

  ngOnInit(){
    this.user_service.update_user_token();
  }

}
