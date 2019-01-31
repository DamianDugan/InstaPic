import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  helper = new JwtHelperService();
  appTitle: string = "InstaPic'achu";
  token: boolean = false;
  admin: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isLogged();
    this.isAdmin();
  }

  isLogged() {
    const token = localStorage.getItem("token");
    const decodedToken = this.helper.decodeToken(token);
    if (decodedToken) {
      this.token = true;
      return decodedToken;
    }
  }

  isAdmin() {
    if (this.token) {
      var tokenDecoded = this.isLogged();
      if (tokenDecoded.isAdmin) this.admin = true;
    }
  }
}
