import { Component, OnInit } from '@angular/core';
declare const navbarCollaspe :any;
@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.css']
})
export class CustomerSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navbarCollaspe();
  }

}
