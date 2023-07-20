import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosserieComponent } from './carrosserie.component';

describe('CarrosserieComponent', () => {
  let component: CarrosserieComponent;
  let fixture: ComponentFixture<CarrosserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
