import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent {
  login_form: FormGroup = new FormGroup({})
  is_submitted = false;
  invalid_credentials = false;
  data: any;

  constructor(
    private form_builder: FormBuilder,
    private user_service: UsersService,
    private router: Router
    ){}

  ngOnInit(){
    this.login_form = this.form_builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  
  on_submit(): void {
    this.is_submitted = true;
    this.user_service.auth_user(this.login_form.value).subscribe(
      response => {
        this.data = response
        if(this.data && this.data.hasOwnProperty('error')){
          this.invalid_credentials = true
        } else if(this.data && this.data.hasOwnProperty('success')){
          this.user_service.login_user(this.login_form.value).subscribe(
            response2 =>{
              if(this.user_service.get_user_role()){
                this.router.navigate(['/admin-dashboard'])
              } else {
                this.router.navigate(['/dashboard'])
              }
            }
          )
          
        }
      }
    )
  }
}
