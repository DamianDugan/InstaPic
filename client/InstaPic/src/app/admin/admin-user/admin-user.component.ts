import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";

@Component({
  selector: "app-admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.css"]
})
export class AdminUserComponent implements OnInit {
  users: Object;

  constructor(private data: UserService) {}

  ngOnInit() {
    this.data.showAll().subscribe(data => {
      console.log("hello");
      this.users = data;
    });
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
