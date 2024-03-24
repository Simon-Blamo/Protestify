import { Component } from '@angular/core';
import { RalliesService  } from '../services/rallies.service';
@Component({
  selector: 'app-list-promoted-rallies',
  templateUrl: './list-promoted-rallies.component.html',
  styleUrls: ['./list-promoted-rallies.component.css']
})
export class ListPromotedRalliesComponent {

  rallies: any;

  constructor(private ralliesService: RalliesService){}

  ngOnInit(){
    this.rallies_list()
  }

  rallies_list(){
    this.rallies = this.ralliesService.list_rallies().subscribe(
      rally => {
        this.rallies = rally;
        console.log(this.rallies)
      },
      error =>{
        
      }
    )
  }

}
