import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mecanique',
  templateUrl: './mecanique.component.html',
  styleUrls: ['./mecanique.component.css']
})
export class MecaniqueComponent implements OnInit {

  nomEmploye = 'John Smith';
  emailService = 'mecanique@example.com';

  constructor() { }

  ngOnInit(): void {
  }

}
