// Built-in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components imports
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
// Routes
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { PictureShowComponent } from './picture-components/picture-show/picture-show.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';
import { OneUserComponent } from './one-user/one-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    PictureCreateComponent,
    ProfileComponent,
    HomeComponent,
    UpdateUserComponent,
    SignInComponent,
    PictureShowComponent,
    AdminUserComponent,
    NavbarComponent,
    LogoutComponent,
    FileSelectDirective,
    OneUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
