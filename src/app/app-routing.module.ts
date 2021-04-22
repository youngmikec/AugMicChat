import { Routes } from '@angular/router'
import { FriendActivityComponent } from './pages/friend-activity/friend-activity.component'
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component'

export const appRoutes: Routes = [
    { path: 'AugMic', component: WelcomePageComponent },
    { path: 'AugMic/:id', component: FriendActivityComponent },
    { path: '', redirectTo: '/AugMic',  pathMatch: 'full' }
]
