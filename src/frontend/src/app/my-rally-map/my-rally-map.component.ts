import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-rally-map',
  templateUrl: './my-rally-map.component.html',
  styleUrls: ['./my-rally-map.component.css']
})
export class MyRallyMapComponent {
  @Input() rally: any;
  @Input() index: any;

  directions_service = new google.maps.DirectionsService();
  directions_renderer = new google.maps.DirectionsRenderer();


  constructor(){}

  ngOnInit(): void {
    this.init_map(this.rally.location);
  }


  init_map(address: string){
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: address}, (results: any, status: any) => {
      if(status === 'OK'){
        const map_options = {
          center: results[0].geometry.location,
          zoom: 13
        };

        const map = new google.maps.Map(document.getElementById(`map-${this.index}`), map_options)

        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: this.rally.title
        });
      }
    })
  }
}
