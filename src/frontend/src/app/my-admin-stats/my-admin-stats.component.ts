import { RalliesService } from './../services/rallies.service';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-admin-stats',
  templateUrl: './my-admin-stats.component.html',
  styleUrls: ['./my-admin-stats.component.css']
})

export class MyAdminStatsComponent {
  user_total: any;
  rallies_total: any;
  constructor(private user_service: UsersService, private rallies_service: RalliesService){}

  ngOnInit(){
    this.get_user_totals()
    this.get_rallies_total()
  }

  get_rallies_total(){
    this.rallies_total = this.rallies_service.get_total_amount_of_rallies().subscribe(
      response => {
        this.rallies_total = response;
        this.rallies_total = this.rallies_total.success;
      }
    )
  }
  get_user_totals(){
    this.user_total = this.user_service.get_total_amount_of_users().subscribe(
      response =>{
        this.user_total = response;
        this.user_total = this.user_total.success;
      }
    )
  }
}
