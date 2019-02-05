import { Component, OnInit } from "@angular/core";
import { Picture } from "../picture-create/picture.model";
import { PictureService } from "../picture-create/picture.service";
import { UserService } from "src/app/shared/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-picture-show",
  templateUrl: "./picture-show.component.html",
  styleUrls: ["./picture-show.component.css"]
})
export class PictureShowComponent implements OnInit {
  pictures: Picture[] = [];
  helper = new JwtHelperService();
  constructor(
    private pictureService: PictureService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.showPictures();
  }

  private showPictures() {
    this.pictureService.showPictures().subscribe(pictures => {
      console.log(pictures);
      this.pictures = pictures as Picture[];
    });
  }

  private addToFav(id) {
    let token = this.userService.getToken();
    let decoded = this.helper.decodeToken(token);
    const decodeIdUser = decoded._id;
    console.log(decodeIdUser);

    // this.userService.showUser(decoded._id).subscribe(res => {
    //   this.userService;
    // });
  }
}
