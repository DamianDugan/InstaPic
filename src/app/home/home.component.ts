import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  helper = new JwtHelperService();
  pictures: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPictures().subscribe(data => {
      this.pictures = data;
    });
  }

  addToFav(id) {
    let token = this.data.getToken();
    let decoded = this.helper.decodeToken(token);

    this.data.getOneUser(decoded._id).subscribe(res => {
      this.data.
    });
  }
}
