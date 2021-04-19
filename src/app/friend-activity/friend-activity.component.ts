import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsListService } from '../services/friends-list.service';

@Component({
  selector: 'friend-activity',
  templateUrl: './friend-activity.component.html',
  styleUrls: ['./friend-activity.component.css']
})
export class FriendActivityComponent implements OnInit {

  public friend
  public chat

  constructor(private aFriend: FriendsListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.friend = this.aFriend.getFriend(this.route.snapshot.params['id'])
  }

  sendMessage(message) {
    this.aFriend.sendMessage(message)
  }
}
