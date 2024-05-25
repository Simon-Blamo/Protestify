import { Component, ViewChild } from '@angular/core';
import { RalliesService  } from '../services/rallies.service';
import { faEarthAmericas, faClock, faCalendar, faCheck, faX, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-list-promoted-rallies',
  templateUrl: './list-promoted-rallies.component.html',
  styleUrls: ['./list-promoted-rallies.component.css']
})
export class ListPromotedRalliesComponent {
  rallies: any;
  is_logged: any;
  current_user: any;
  faEarthAmericas = faEarthAmericas;
  faClock = faClock;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faX = faX;
  faUser = faUser;
  faUserGroup = faUserGroup;
  

  constructor(
    private rallies_service: RalliesService, 
    private user_service: UsersService
  ){}

  ngOnInit(){
    this.rallies_list()
    this.retrieve_user_status()
  }
  ngAfterViewInit(){

  }

  retrieve_user_status(){
    this.is_logged = this.user_service.is_logged_in()
    this.current_user = this.user_service.get_value_from_token("username")
  }
  
  rallies_list(){
    this.rallies = this.rallies_service.list_rallies(3).subscribe(
      rally => {
        this.rallies = rally;
        
        for (let i = 0; i < this.rallies.length; i++){
          this.rallies[i].ownsThisRally = (this.current_user == this.rallies[i].owner)
          this.rallies[i].attending_rally = false
          if(this.rallies[i].attendees != ''){
            const attendees = JSON.parse(this.rallies[i].attendees)
            console.log(attendees)
            for (let j = 0; j < attendees.length; j++){
              if(attendees[j] == this.current_user){
                this.rallies[i].attending_rally = true
              }
            }
            // this.rallies[i].attending_rally = this.rallies[i].attendees.includes(this.current_user)
          }
          
        }
      }
    )
  }

  update_attendees(event: any, rally_id: number, c_user: string, index: number){
    this.rallies_service.change_rally_attendance({
      id: rally_id,
      decision: event.target.checked,
      the_user: c_user
    }).subscribe(
      response => {
        console.log(response)
        const button = document.getElementById(`rally-${index}-checkbox-label`)!
        const attendance = document.getElementById(`rally-${index}-attendance_number`)!
        if(event.target.checked == true){
          button.className = "btn btn-success";
          button.innerHTML = "Attending!"
          const number =  +attendance.innerHTML
          attendance.innerHTML = ""+(number+1);
        } else {
          button.className = "btn btn-primary";
          button.innerHTML = "Attending?"
          const number =  +attendance.innerHTML
          attendance.innerHTML = ""+(number-1);
        }
      }
    )
  }

}
