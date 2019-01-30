<<<<<<< HEAD
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { PictureCreateComponent } from "./picture-components/picture-create/picture-create.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
=======
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';
import { PictureShowComponent } from './picture-components/picture-show/picture-show.component';
import { GetAllComponent } from './user/get-all/get-all.component';

import { NgModule } from '@angular/core';
>>>>>>> 9becf6976e4b48703c8a584677f45541f4780dff

const routes: Routes = [
  {
    path: "signup",
    component: UserComponent,
    children: [{ path: "", component: SignUpComponent }]
  },

  {
    path: "post-picture",
    component: PictureCreateComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
<<<<<<< HEAD
    path: "",
    component: HomeComponent
  }
=======
    path: 'home',
    component: PictureShowComponent
  },
  {
    path: 'users',
    component: GetAllComponent
  },
  {
    path: 'user/update/${user._id}',
    component: GetAllComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
>>>>>>> 9becf6976e4b48703c8a584677f45541f4780dff
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
