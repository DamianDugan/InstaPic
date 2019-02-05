import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();
  id: String

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const token = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(token);
    const idDecode = decodedToken._id;
    // console.log(this.userService.selectedUser);
    this.userService.showUser(idDecode).subscribe(user => {
      this.users = user;
    });
  }

  userUpdate(form: NgForm) {
    //form.value._id = this.users._id;
    //console.log(this.users._id);
    this.userService.updateUser(form.value).subscribe(newUser => {
      this.users = newUser;
      this.router.navigate(["/profile"]);
    });
  }
}
