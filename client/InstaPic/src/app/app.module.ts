// Built-in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components imports
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';
import { AppComponent } from './app.component';
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
import { ShowOnePicComponent } from './picture-components/show-one-pic/show-one-pic.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
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
    OneUserComponent,
    ShowOnePicComponent,
    AlbumCreateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
