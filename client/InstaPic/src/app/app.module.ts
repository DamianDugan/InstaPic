<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';

@NgModule({
  declarations: [AppComponent, PictureCreateComponent],
  imports: [BrowserModule, FormsModule],
=======
//Built-in imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
//Components imports
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
//Routes
import { appRoutes } from "./routes";

@NgModule({
  declarations: [AppComponent, UserComponent, SignUpComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
>>>>>>> 0d4a9f6480194148adb36c40b03c90c7fb08c73d
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
