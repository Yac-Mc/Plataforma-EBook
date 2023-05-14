import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  user: User;
  constructor() { 
    this.user = new User(JSON.parse(localStorage.getItem('login') || '{}'));
  }

  ngOnInit(): void {
  }

}
