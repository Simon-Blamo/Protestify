import { UsersService } from './../services/users.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { RalliesService } from '../services/rallies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promote-your-rally',
  templateUrl: './promote-your-rally.component.html',
  styleUrls: ['./promote-your-rally.component.css']
})
export class PromoteYourRallyComponent {
  rally_creation_form: FormGroup = new FormGroup({});
  has_pending: boolean = false;
  request_data: any;
  response_data: any;
  formatted_address="";
  
  options = {
    componentRestrictions: {
      country: ['AU']
    }
  }


  constructor(
    private form_builder: FormBuilder,
    private user_service: UsersService,
    private rally_service: RalliesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.user_service.update_token()
    this.has_pending = this.user_service.get_value_from_token('pending_rally')

    this.rally_creation_form = this.form_builder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      location: ['', [Validators.required]],
      event_date: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
    })
  }

  public AddressChange(address: any) { 
    //setting address from API to local variable 
    this.formatted_address=address.formatted_address 
    this.rally_creation_form.controls['location'].setValue(this.formatted_address)
  }
  

  on_submit(){
    this.request_data = this.rally_creation_form.value
    this.request_data.start_time = this.request_data.event_date + " "+ this.request_data.start_time
    this.request_data.activist_id = this.user_service.get_value_from_token("activist_id")
    this.rally_service.create_rally(this.request_data).subscribe(
      response => {
        this.response_data = response
        if(this.response_data && this.response_data.hasOwnProperty('error')){
          console.log('Fail')
        } else if(this.response_data && this.response_data.hasOwnProperty('success')) {
          this.router.navigate(['/dashboard'])
        }
      }
    )
  }
}
