import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  @Input() userMessages

  constructor() { }

  ngOnInit(): void {
  }

}
