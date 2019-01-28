import { Component, OnInit } from "@angular/core";

import { UserService } from "../../shared/user.service";
import { NgForm } from "@angular/forms";
import { User } from "src/app/shared/user.model";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;

  newUser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 4000);
        this.resetForm(form);
      },
      err => {
        if (err) {
          this.serverErrorMessages = err + "<br/>";
        } else {
          this.serverErrorMessages =
            "Something went wrong. Please contact admin";
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser.username = "";
    this.userService.selectedUser.email = "";
    this.userService.selectedUser.password = "";
    this.userService.selectedUser.confirm_password = "";

    // = {
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirm_password: ""
    // };
    form.resetForm();
    this.serverErrorMessages = "";
  }
}
