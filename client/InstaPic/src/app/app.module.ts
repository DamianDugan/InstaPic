// Built-in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components imports
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// Routes
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './user/profile/profile.component';
import { GetAllComponent } from './user/get-all/get-all.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    PictureCreateComponent,
    ProfileComponent,
    GetAllComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
