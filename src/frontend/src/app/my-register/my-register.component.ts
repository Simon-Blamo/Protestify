import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-register',
  templateUrl: './my-register.component.html',
  styleUrls: ['./my-register.component.css']
})
export class MyRegisterComponent {
  register_form: FormGroup = new FormGroup({});
  email_exists: any;
  username_exists: any;
  
  constructor(
    private form_builder: FormBuilder,
    private user_service: UsersService
  ){}

  ngOnInit(): void {
    this.register_form = this.form_builder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(8)], [this.validate_username.bind(this)]],
      email: ['', [Validators.required, Validators.email], [this.validate_email.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  validate_email(control: any){
    return new Promise(resolve => {
      const email = control.value;
      this.user_service.check_email(email).subscribe(
        exists => {
          this.email_exists = exists
          this.email_exists = this.email_exists.exists
          resolve(this.email_exists == true ? true: false);
        }
      )
    })
  }

  validate_username(control: any){
    return new Promise(resolve => {
      const username = control.value;
      this.user_service.check_username(username).subscribe(
        exists => {
          this.username_exists = exists;
          this.username_exists = this.username_exists.exists;
          resolve(exists == true ? true: false);
        }
      )
    })
  }

  on_submit(){
    this.user_service.add_user(this.register_form.value).subscribe(
      user => {
        location.assign("http://localhost:4200/congrats");
      }
    )
  }

}
