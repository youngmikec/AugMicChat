import { Routes } from '@angular/router'
import { FriendActivityComponent } from './friend-activity/friend-activity.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'

export const appRoutes: Routes = [
    { path: 'AugMic', component: WelcomePageComponent },
    { path: 'AugMic/:id', component: FriendActivityComponent },
    { path: '', redirectTo: '/AugMic',  pathMatch: 'full' }
]

