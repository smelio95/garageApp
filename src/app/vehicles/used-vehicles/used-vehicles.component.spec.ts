import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedVehiclesComponent } from './used-vehicles.component';

describe('UsedVehiclesComponent', () => {
  let component: UsedVehiclesComponent;
  let fixture: ComponentFixture<UsedVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
