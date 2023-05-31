import { Component, OnInit } from '@angular/core';
declare const navbarCollaspe :any;
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navbarCollaspe();
  }

}
