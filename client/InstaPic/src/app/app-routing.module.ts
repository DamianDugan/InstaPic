import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';
import { HomeComponent } from './home/home.component';
import { PictureShowComponent } from './picture-components/picture-show/picture-show.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { OneUserComponent } from './one-user/one-user.component';
import { ShowOnePicComponent } from './picture-components/show-one-pic/show-one-pic.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { SearchComponent } from './search/search.component';
import { AllusersComponent } from './allusers/allusers.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent
  },

  {
    path: 'post-picture',
    component: PictureCreateComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  // {
  //   path: "",
  //   component: HomeComponent
  // },
  {
    path: 'home',
    component: PictureShowComponent
  },

  {
    path: 'user/update',
    component: UpdateUserComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'admin/users',
    component: AdminUserComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'user',
    component: OneUserComponent
  },
  {
    path: 'picture/:id',
    component: ShowOnePicComponent
  },
  {
    path: 'album',
    component: AlbumCreateComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'allusers',
    component: AllusersComponent
  },
  // otherwise redirect to home

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
