import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  users: Object;
  helper: JwtHelperService;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // const token = this.userService.getToken();
    // const decodedToken = this.helper.decodeToken(token);
    // const idDecode = decodedToken._id;
    // this.userService.showUser(idDecode).subscribe(user => {
    //   this.users = user;
    // });
  }

  updateProfile() {
    // this.userService.updateUser(this.users).subscribe(newUser => {
    //   this.users = newUser;
    // });
  }
}
