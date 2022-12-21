import { Component, OnInit } from '@angular/core';
// declare const activeBtns: any;
declare const navbarCollaspe :any;

@Component({
  selector: 'app-owner-sidebar',
  templateUrl: './owner-sidebar.component.html',
  styleUrls: ['./owner-sidebar.component.css']
})
export class OwnerSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navbarCollaspe();
    // activeBtns()
  }

}
