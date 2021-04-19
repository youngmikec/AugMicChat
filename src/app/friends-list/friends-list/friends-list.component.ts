import { Component, OnInit } from '@angular/core';
import { FriendsListService } from 'src/app/services/friends-list.service';

@Component({
  selector: 'friends-list',
  template: `
  <div *ngFor="let friend of friends">
    <div class="a-friend" [routerLink] = "['/AugMic', friend.id]">
      <img *ngIf="friend.profilePic" [src]="[ friend.profilePic ]" alt="" height="50px" width="50px">
      <img *ngIf="!friend.profilePic" src="../../../assets/noPics.png" alt="" height="50px" width="50px">
      <p class="friends-name">{{friend.name}}</p>
    </div>
  </div>
  `,
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  public friends

  constructor(private allFriends: FriendsListService) { }

  ngOnInit(): void {
    this.getAllFriends()
  }

  getAllFriends(){
    this.friends = this.allFriends.getFriends()
  }

}
