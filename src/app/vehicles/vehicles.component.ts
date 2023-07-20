import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  selectedVehicle: any;

  showVehicleDetails(vehicle: any): void {
    this.selectedVehicle = vehicle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
