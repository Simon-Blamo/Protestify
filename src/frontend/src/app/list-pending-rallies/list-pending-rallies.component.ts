import { UsersService } from './../services/users.service';
import { RalliesService } from './../services/rallies.service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faEarthAmericas, faClock, faCalendar, faCheck, faX, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-pending-rallies',
  templateUrl: './list-pending-rallies.component.html',
  styleUrls: ['./list-pending-rallies.component.css']
})
export class ListPendingRalliesComponent implements OnChanges {
  token_data: any;
  rallies: any;
  faEarthAmericas = faEarthAmericas;
  faClock = faClock;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faX = faX;
  faUser = faUser;

  @Input() admin_decision: any;


  constructor(private rallies_service: RalliesService, private user_service: UsersService){}
  

  ngOnInit(){
    this.rallies_list(0);
  }

  rallies_list(type: number){
    this.rallies = this.rallies_service.list_rallies(type).subscribe(
      rally => {
        this.rallies = rally
        console.log(this.rallies)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['admin_decision']){
      if(changes['admin_decision'].currentValue == true){
        this.rallies_list(3)
      } else {
        this.rallies_list(0)

      }
      
    }
  }

  

  submit_decision(rally_id: number, the_decision: boolean, rally_owner: number){
    
    this.rallies_service.change_rally_status({
      id: rally_id,
      decision: the_decision,
      activist_id: rally_owner
    }).subscribe(
      response => {
        if(this.admin_decision == false){
          this.rallies_list(0);
        } else {
          this.rallies_list(3);
        }
        
      }
    )
  }
}

