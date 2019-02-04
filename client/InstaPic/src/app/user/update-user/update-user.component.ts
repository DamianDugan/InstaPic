import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();

  constructor(private userService: UserService) {}

  ngOnInit() {
    const token = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(token);
    const idDecode = decodedToken._id;
    console.log(this.userService);
    this.userService.showUser(idDecode).subscribe(user => {
      this.users = user;
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.userService);
    this.userService.updateUser(this.userService).subscribe(newUser => {
      console.log(newUser);
      this.users = newUser;
    });
  }
}
