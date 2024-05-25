import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-homepage',
  templateUrl: './my-homepage.component.html',
  styleUrls: ['./my-homepage.component.css']
})
export class MyHomepageComponent {

  successMessage: any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['success'] === 'true' ? "Registration successful!" : '';
    })
  }

  dismiss_success_message(){
    this.successMessage = '';
  }

}
