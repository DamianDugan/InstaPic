// Built-in imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Components imports
import { PictureCreateComponent } from "./picture-components/picture-create/picture-create.component";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
// Routes
import { AppRoutingModule } from "./app-routing.module";
import { ProfileComponent } from "./user/profile/profile.component";
import { GetAllComponent } from "./user/get-all/get-all.component";
import { HomeComponent } from "./home/home.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { PictureShowComponent } from "./picture-components/picture-show/picture-show.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    PictureCreateComponent,
    ProfileComponent,
    GetAllComponent,
    HomeComponent,
    UpdateUserComponent,
    SignInComponent,
    PictureShowComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
