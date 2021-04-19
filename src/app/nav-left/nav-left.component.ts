import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  opened = true

  constructor() { }

  ngOnInit(): void {
    
  }

  //  toggleSidebar(){
  //    this.opened = !this.opened
  //  }

}
