import { Component } from '@angular/core';

@Component({
  selector: 'app-used-vehicles',
  templateUrl: './used-vehicles.component.html',
  styleUrls: ['./used-vehicles.component.css']
})
export class UsedVehiclesComponent {
  vehicles: any[] = [
    {
      brand: 'Audi Q3',
      year: 2000,
      fuel: 'Diesel',
      kilometers: 111,
      price: 5855
    },
    {
      brand: 'BMW serie 5',
      year: 2000,
      fuel: 'Diesel',
      kilometers: 111,
      price: 500
    },
    {
      brand: 'Mercedes classe B',
      year: 2000,
      fuel: 'Diesel',
      kilometers: 300000,
      price: 4970
    },
    {
      brand: 'Porsche gts',
      year: 2000,
      fuel: 'Diesel',
      kilometers: 111,
      price: 5855
    },
    {
      brand: 'Volkswagen t-cross',
      year: 2023,
      fuel: 'Diesel',
      kilometers: 111,
      price: 500
    }
  ];

  vehiclesFilters: any[] = [];
  filter = {
    kilometers: 0,
    minKilometers: 0,
    maxKilometers: 300000,
    price: 0,
    priceMin: 0,
    priceMax: 20000,
    year: 0,
    minYear: 1990,
    maxYear: 2023
  };

  constructor() {
    this.applyFilter();
  }

  applyFilter(): void {
    this.vehiclesFilters = this.vehicles.filter((vehicle: any) => {
      let valid = true;
      const kilometers = vehicle.kilometers;
      const price = vehicle.price;
      const year = vehicle.year;

      // Filtrage des kilomètres
      if (this.filter.kilometers) {
        if (this.filter.kilometers === 1 && (kilometers > 100000 || kilometers < 0)) {
          valid = false;
        } else if (this.filter.kilometers === 2 && (kilometers < 100000 || kilometers > 300000)) {
          valid = false;
        }
      }

      // Filtrage du prix
      if (this.filter.price) {
        if (this.filter.price === 1 && (price > 10000 || price < 0)) {
          valid = false;
        } else if (this.filter.price === 2 && (price < 10000 || price > 20000)) {
          valid = false;
        }
      }

      // Filtrage des années
      if (this.filter.year) {
        if (this.filter.year === 1 && (year > 2000 || year < 1990)) {
          valid = false;
        } else if (this.filter.year === 2 && (year < 2000 || year > 2010)) {
          valid = false;
        } else if (this.filter.year === 3 && (year < 2010 || year > 2023)) {
          valid = false;
        }
      }

      return valid;
    });
  }

  vehicleUsedDetails(vehicle: any): void {
    console.log('Détails du véhicule :', vehicle);
  }

  reinitializeKilometers(): void {
    this.filter.kilometers = 0;
    this.applyFilter();
  }

  reinitializePrice(): void {
    this.filter.price = 0;
    this.applyFilter();
  }

  reinitializeYear(): void {
    this.filter.year = 0;
    this.applyFilter();
  }
}
