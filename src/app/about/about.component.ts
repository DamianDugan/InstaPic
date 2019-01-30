import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();

  getAllUsers() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    const token = this.data.getToken();
    const decodedToken = this.helper.decodeToken(token);
    if (decodedToken) {
      const userAdmin = decodedToken.isAdmin;
      if (userAdmin) return this.getAllUsers();
      return this.data.toHome();
    } else {
      this.data.toHome();
    }
  }

  deleteUser(id) {
    this.data.delUser(id).subscribe(res => {
      this.getAllUsers();
    });
  }

  userAdmin(userState) {
    if (userState.isAdmin === false) {
      userState.isAdmin = true;
    } else {
      userState.isAdmin = false;
    }
    let newUser = JSON.stringify(userState);
    this.data.updateUser(newUser).subscribe();
  }
  userBanned(userState) {
    if (userState.isBanned === false) {
      userState.isBanned = true;
    } else {
      userState.isBanned = false;
    }
    let newUser = JSON.stringify(userState);
    this.data.updateUser(newUser).subscribe();
  }
}
