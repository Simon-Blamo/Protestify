import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {
  logged_in: boolean = false;

  constructor(
    private user_service: UsersService
  ){}
  ngOnInit(){
    this.logged_in = this.user_service.is_logged_in()
  }
}
