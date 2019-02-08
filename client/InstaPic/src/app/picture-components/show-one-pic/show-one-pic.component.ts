import { Component, OnInit } from "@angular/core";
import { Picture } from "../picture-create/picture.model";
import { PictureService } from "../picture-create/picture.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/shared/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-show-one-pic",
  templateUrl: "./show-one-pic.component.html",
  styleUrls: ["./show-one-pic.component.css"]
})
export class ShowOnePicComponent implements OnInit {
  picture: object; // Picture[] = [] as Picture[];
  helper = new JwtHelperService();
  liked: boolean;
  users: Object;

  public id: string;
  constructor(
    private pictureService: PictureService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  singleUser(id: string) {
    return this.userService.userGetOne(id);
  }

  ngOnInit() {
<<<<<<< HEAD
    const token = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(token);
    const idDecode = decodedToken._id;
    this.userService.showUser(idDecode).subscribe(user => {
      console.log(user);
      this.users = user;
    });
    this.id = this.route.snapshot.paramMap.get('id');
=======
    this.id = this.route.snapshot.paramMap.get("id");
>>>>>>> cfd60abf4b0988db50d4aa011245f88676e5e862
    this.pictureService.showOnePicture(this.id).subscribe(pict => {
      this.picture = pict;
    });
    this.isLiked();
  }

  isLiked() {
    const user = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(user);

    this.id = this.route.snapshot.paramMap.get("id");

    this.pictureService.isLiked(decodedToken._id, this.id).subscribe(test => {
      if (test == "Not liked") {
        this.liked = false;
      } else {
        this.liked = true;
      }
    });
  }

  like() {
    const user = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(user);

    this.id = this.route.snapshot.paramMap.get("id");

    this.pictureService
      .likePicture(decodedToken._id, this.id)
      .subscribe(test => {
        this.picture = test;
        this.isLiked();
      });
  }

  unlike() {
    const user = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(user);

    this.id = this.route.snapshot.paramMap.get("id");

    this.pictureService
      .unlikePicture(decodedToken._id, this.id)
      .subscribe(pict => {
        this.picture = pict;
        this.isLiked();
      });
  }
}
