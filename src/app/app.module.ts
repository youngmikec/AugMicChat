import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { appRoutes } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FriendsListComponent } from './friends-list/friends-list/friends-list.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { FriendsListService } from './services/friends-list.service';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { FriendActivityComponent } from './pages/friend-activity/friend-activity.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { FriendChatComponent } from './pages/friend-chat/friend-chat.component';
import { FriendDetailsComponent } from './pages/friend-details/friend-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavLeftComponent,
    WelcomePageComponent,
    FriendsListComponent,
    FriendActivityComponent,
    UserChatComponent,
    FriendChatComponent,
    FriendDetailsComponent,
  ],
  imports: [
    BrowserModule,SidebarModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ FriendsListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
