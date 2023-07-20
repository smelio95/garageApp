import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicle: any;
  
  @Input() selectedVehicle: any;


  ngOnInit(): void {}

}
