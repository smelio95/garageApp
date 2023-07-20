import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosserie',
  templateUrl: './carrosserie.component.html',
  styleUrls: ['./carrosserie.component.css']
})
export class CarrosserieComponent implements OnInit {

  nomEmploye = 'John Doe';
  emailService = 'carrosserie@example.com';

  constructor() { }

  ngOnInit(): void {
  } 

}
