import { Component } from '@angular/core';
import { RalliesService  } from '../services/rallies.service';
import { faEarthAmericas, faClock, faCalendar, faCheck, faX, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-promoted-rallies',
  templateUrl: './list-promoted-rallies.component.html',
  styleUrls: ['./list-promoted-rallies.component.css']
})
export class ListPromotedRalliesComponent {
  rallies: any;
  faEarthAmericas = faEarthAmericas;
  faClock = faClock;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faX = faX;
  faUser = faUser;

  constructor(private rallies_service: RalliesService){}

  ngOnInit(){
    this.rallies_list()
  }
  
  rallies_list(){
    this.rallies = this.rallies_service.list_rallies(3).subscribe(
      rally => {
        this.rallies = rally;
        console.log(this.rallies)
      }
    )
  }

}
