import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
  is_admin: boolean = false;

  constructor(private user_service: UsersService){}

  ngOnInit(){
    this.check_role()
  }

  check_role(){
    this.is_admin = this.user_service.get_user_role()
  }
}
