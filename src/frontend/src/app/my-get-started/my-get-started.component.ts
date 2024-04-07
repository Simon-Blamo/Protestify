import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-get-started',
  templateUrl: './my-get-started.component.html',
  styleUrls: ['./my-get-started.component.css']
})
export class MyGetStartedComponent {
  login_form: FormGroup = new FormGroup({})
  is_submitted = false;
  invalid_credentials = false;
  login_data: any;

  register_form: FormGroup = new FormGroup({});
  email_exists: any;
  username_exists: any;

  the_registration_form: any;
  the_login_form: any;

  constructor(
    private form_builder: FormBuilder,
    private user_service: UsersService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.login_form = this.form_builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    this.register_form = this.form_builder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(8)], [this.validate_username.bind(this)]],
      email: ['', [Validators.required, Validators.email], [this.validate_email.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      confirm_password: ['', Validators.required]
    }, {
      validators: this.passwords_match_validator
    })

    this.collect_elements()
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

  passwords_match_validator(form: FormGroup){
    const password = form.get('password')
    const confirm_password = form.get('confirm_password');

    if((password && confirm_password) && (password.value !== confirm_password.value)){
      confirm_password.setErrors({ password_mismatch: true});
    } else {
      confirm_password?.setErrors(null);
    }
  }

  on_submit_login(): void {
    this.is_submitted = true;
    this.user_service.auth_user(this.login_form.value).subscribe(
      response => {
        this.login_data = response
        if(this.login_data && this.login_data.hasOwnProperty('error')){
          this.invalid_credentials = true
        } else if(this.login_data && this.login_data.hasOwnProperty('success')){
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

  on_submit_register(): void {
    this.user_service.add_user(this.register_form.value).subscribe(
      data => {
        this.router.navigate(['/'])
      }
    )
  }

  collect_elements(){
    this.the_registration_form = document.getElementById('sign-up-container')
    this.the_login_form = document.getElementById('sign-in-container');
    this.the_login_form.style.height = `${this.the_registration_form.offsetHeight}px`
    console.log(this.the_login_form.style.height)
  }

  change_forms(event: any){
    if(event.target.checked){
      console.log("hi")
      this.the_registration_form.style.visibility = "hidden"
      this.the_login_form.style.visibility = "visible"
    } else{
      console.log("Hello")
      this.the_registration_form.style.visibility = "visible"
      this.the_login_form.style.visibility = "hidden"
    }
  }

}
