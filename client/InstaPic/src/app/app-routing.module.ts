import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { PictureCreateComponent } from "./picture-components/picture-create/picture-create.component";
import { HomeComponent } from "./home/home.component";
import { PictureShowComponent } from "./picture-components/picture-show/picture-show.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { AdminUserComponent } from "./admin/admin-user/admin-user.component";
import { LogoutComponent } from "./auth/logout/logout.component";

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
  // {
  //   path: "",
  //   component: HomeComponent
  // },
  {
    path: "home",
    component: PictureShowComponent
  },

  {
    path: "user/update/",
    component: UpdateUserComponent
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "admin/users",
    component: AdminUserComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  // otherwise redirect to home

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
