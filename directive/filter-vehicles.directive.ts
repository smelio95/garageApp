import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[filterVehicles]'
})
export class FilterVehiclesDirective implements OnChanges {
  @Input('filterVehicles') filter: any;
  @Input() vehicles: any[]; // Accès avec ['vehicles'] au lieu de vehicle

  filteredVehicles: any[] = [];

  constructor() {
    // Initialisez les propriétés ici si nécessaire
    this.filter = null;
    this.vehicles = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter'] || changes['vehicles']) { // Accès avec ['filter'] et ['vehicles']
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (this.vehicles && this.filter) { // Accès avec ['vehicles']
      this.filteredVehicles = this.vehicles.filter((vehicle: any) => {
        const kilometers = vehicle.kilometers;
        const price = vehicle.price;
        const year = vehicle.year;

        // Filtre du kilométrage
        if (this.filter['kilometers'] === 1 && (kilometers < 0 || kilometers > 100000)) { // Accès avec ['kilometers']
          return false;
        } else if (this.filter['kilometers'] === 2 && (kilometers < 100000 || kilometers > 300000)) { // Accès avec ['kilometers']
          return false;
        }

        // Filtre du prix
        if (this.filter['price'] === 1 && (price < 0 || price > 10000)) { // Accès avec ['price']
          return false;
        } else if (this.filter['price'] === 2 && (price < 10000 || price > 20000)) { // Accès avec ['price']
          return false;
        }

        // Filtre des années
        if (this.filter['year'] === 1 && (year < 1990 || year > 2000)) { // Accès avec ['year']
          return false;
        } else if (this.filter['year'] === 2 && (year < 2000 || year > 2010)) { // Accès avec ['year']
          return false;
        } else if (this.filter['year'] === 3 && (year < 2010 || year > 2023)) { // Accès avec ['year']
          return false;
        }

        return true;
      });
    }
  }
}
