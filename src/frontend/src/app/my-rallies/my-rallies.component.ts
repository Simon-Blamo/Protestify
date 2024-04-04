import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { RalliesService } from './../services/rallies.service';
import { faEarthAmericas, faClock, faCalendar, faCheck, faX, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-rallies',
  templateUrl: './my-rallies.component.html',
  styleUrls: ['./my-rallies.component.css']
})
export class MyRalliesComponent {
  token_data: any;
  rallies: any
  pending_rallies: any = [];
  rejected_rallies: any = [];
  promoted_rallies: any = [];
  passed_rallies: any = [];
  faEarthAmericas = faEarthAmericas;
  faClock = faClock;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faX = faX;
  faUser = faUser;

  constructor(private user_service: UsersService){}

  ngOnInit(){
    this.list_user_rallies();
  }

  list_user_rallies(){
    this.token_data = this.user_service.get_value_from_token("activist_id")
    this.rallies = this.user_service.get_user_rallies({
      "activist_id": this.token_data
    }).subscribe(
      response => {
        this.rallies = response;
        
        for(let i = 0; i < this.rallies.length; i++){
          let item = this.rallies[i];
          if(item.status == 0){
            this.pending_rallies.push(item)
          } else if(item.status == 1){
            this.rejected_rallies.push(item)
          } else if(item.status == 3){
            this.promoted_rallies.push(item)
          } else if(item.status == 4){
            this.passed_rallies.push(item)
          }
        }
      }
    )
  }

}
