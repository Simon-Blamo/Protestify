import { UsersService } from './../services/users.service';
import { RalliesService } from './../services/rallies.service';
import { Component } from '@angular/core';
import { faEarthAmericas, faClock, faCalendar, faCheck, faX, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-pending-rallies',
  templateUrl: './list-pending-rallies.component.html',
  styleUrls: ['./list-pending-rallies.component.css']
})
export class ListPendingRalliesComponent {
  token_data: any;
  rallies: any;
  faEarthAmericas = faEarthAmericas;
  faClock = faClock;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faX = faX;
  faUser = faUser;


  constructor(private rallies_service: RalliesService, private user_service: UsersService){}
  

  ngOnInit(){
    this.rallies_list()

  }

  rallies_list(){
    this.rallies = this.rallies_service.list_rallies(0).subscribe(
      rally => {
        this.rallies = rally
        console.log(this.rallies)
      }
    )
  }

  submit_decision(rally_id: number, the_decision: boolean, rally_owner: number){
    
    this.rallies_service.change_rally_status({
      id: rally_id,
      decision: the_decision,
      activist_id: rally_owner
    }).subscribe(
      response => {
        this.rallies_list();
      }
    )
  }
}

