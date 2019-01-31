import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-one-user",
  templateUrl: "./one-user.component.html",
  styleUrls: ["./one-user.component.scss"]
})
export class OneUserComponent implements OnInit {
  helper = new JwtHelperService();
  id: String;
  //currentUSer = Profil user page
  currentUser: Object;
  //user = user logged
  user: Object;
  AdminToken: Boolean;
  idEqualCurrentUser: Boolean;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    const user = this.data.getToken();
    const decodedToken = this.helper.decodeToken(user);
    this.id = this.route.snapshot.paramMap.get("id");
    this.data.getOneUser(this.id).subscribe(res => {
      this.currentUser = res;
      if (decodedToken._id === this.id) {
        this.idEqualCurrentUser = true;
      }
    });

    this.AdminToken = decodedToken.isAdmin;
  }
}
