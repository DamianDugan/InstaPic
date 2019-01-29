import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { PictureCreateComponent } from "./picture-components/picture-create/picture-create.component";
import { PictureShowComponent } from "./picture-components/picture-show/picture-show.component";
import { GetAllComponent } from "./user/get-all/get-all.component";

import { NgModule } from "@angular/core";

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
    path: "user/:id",
    component: ProfileComponent
  },
  {
    path: "home",
    component: PictureShowComponent
  },
  {
    path: "users",
    component: GetAllComponent
  },
  // {
  //   path: "user/update/:id",
  //   component: GetAllComponent
  // },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
