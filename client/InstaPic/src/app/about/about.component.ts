import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  users: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
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
