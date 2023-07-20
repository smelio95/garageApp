import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {

  nomEmploye = 'Jane Doe';
  emailService = 'entretien@example.com';

  constructor() { }

  ngOnInit(): void {
  }

}
