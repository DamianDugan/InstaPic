import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.css"]
})
export class AdminUserComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();


  getAllUsers() {
    this.data.showAll().subscribe(data => {
      this.users = data;
    });
  }

  singleUser(id : string) {
    return this.data.userGetOne(id);
  }

  constructor(private data: UserService) {}


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
      this.ngOnInit();
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
