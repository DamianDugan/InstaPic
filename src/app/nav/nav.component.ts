import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  helper = new JwtHelperService();
  appTitle: string = "InstaPic'achu";

  constructor() {}

  ngOnInit() {}
}
