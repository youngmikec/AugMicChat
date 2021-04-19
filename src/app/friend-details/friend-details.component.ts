import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent implements OnInit {

  @Input() friend

  constructor() { }

  ngOnInit(): void {
  }

}
