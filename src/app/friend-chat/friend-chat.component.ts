import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'friend-chat',
  templateUrl: './friend-chat.component.html',
  styleUrls: ['./friend-chat.component.css']
})
export class FriendChatComponent implements OnInit {

  @Input() friendMessages

  constructor() { }

  ngOnInit(): void {
  }

}
