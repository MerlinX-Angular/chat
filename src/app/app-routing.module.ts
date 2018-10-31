import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },
  { path: 'myposts', component: MyPostsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
