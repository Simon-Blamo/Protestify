import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-register',
  templateUrl: './my-register.component.html',
  styleUrls: ['./my-register.component.css']
})
export class MyRegisterComponent {
  register_form: FormGroup = new FormGroup({});
  email_exists: boolean = false;
  username_exists: boolean = false;
  
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
          this.email_exists = exists as boolean;
          resolve(exists == true ? {email_exists: true}: null);
        }
      )
    })
  }

  validate_username(control: any){
    return new Promise(resolve => {
      const username = control.value;
      this.user_service.check_email(username).subscribe(
        exists => {
          this.email_exists = exists as boolean;
          resolve(exists == true ? {username_exists: true}: null);
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
