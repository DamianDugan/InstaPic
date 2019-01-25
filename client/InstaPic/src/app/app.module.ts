// Built-in imports
import { AppComponent } from './app.component';
import { PictureCreateComponent } from './picture-components/picture-create/picture-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// Components imports
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// Routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    PictureCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
