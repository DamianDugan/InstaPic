import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(private data: UserService) {}

  ngOnInit() {
    this.data.deleteToken();
  }
}
