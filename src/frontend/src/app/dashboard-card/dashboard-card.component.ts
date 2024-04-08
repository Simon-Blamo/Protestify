import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
  is_admin: boolean = false;
  admin_selected_promoted: any;

  constructor(private user_service: UsersService){}

  ngOnInit(){
    this.check_role()
    this.admin_selected_promoted = false;
  }

  check_role(){
    this.is_admin = this.user_service.is_user_admin()
  }

  change_rallies_list(event: any){
    if(event.target.checked){
      this.admin_selected_promoted = true;
    } else {
      this.admin_selected_promoted = false;
    }
  }
}
