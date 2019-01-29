import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { PictureCreateComponent } from "./picture-components/picture-create/picture-create.component";
import { GetAllComponent } from "./user/get-all/get-all.component";
import { SignInComponent } from "./user/sign-in/sign-in.component"
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
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "users",
    component: GetAllComponent
  },
  {
    path: "user/update/${user._id}",
    component: GetAllComponent
  },
  {
    path: "signin",
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
