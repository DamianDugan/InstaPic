import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "src/app/shared/user.model";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();



  constructor(private userService: UserService) {}

  ngOnInit() {
    const token = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(token);
    const idDecode = decodedToken._id;
    this.userService.showUser(idDecode).subscribe(user => {
      console.log(user);
      this.users = user;
    });
  }

  deleteAccount(id) {
    this.userService.delUser(id).subscribe(res => {
      this.userService.deleteToken();
    });
  }
}
