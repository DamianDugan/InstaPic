import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "src/app/shared/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.showAllUsers();
  }

  showProfile(id: string) {
    this.userService.showUser(id).subscribe(() => {
      this.showAllUsers();
    });
  }

  private showAllUsers() {
    this.userService.showAll().subscribe(users => {
      this.users = users as User[];
    });
  }
}
