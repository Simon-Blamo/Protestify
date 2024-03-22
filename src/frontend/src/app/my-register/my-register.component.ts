import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-register',
  templateUrl: './my-register.component.html',
  styleUrls: ['./my-register.component.css']
})
export class MyRegisterComponent {
  user: any
  register_form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  constructor(private userService: UsersService){}

  on_submit(){
    this.userService.add_user(this.register_form.value).subscribe(
      user => {
        this.user = user
        location.assign("http://localhost:4200/congrats");
      }
    )
  }

}
