import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "src/app/shared/user.model";

@Component({
  selector: "app-get-all",
  templateUrl: "./get-all.component.html",
  styleUrls: ["./get-all.component.css"]
})
export class GetAllComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.showAllUsers();
  }

  private showAllUsers() {
    this.userService.showAll().subscribe(users => {
      this.users = users as User[];
      console.log(users);
    });
  }
}
