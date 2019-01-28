import { Component, OnInit } from "@angular/core";
import { PictureService } from "../service/picture.service";
import { Picture } from "../shared/picture.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [PictureService]
})
export class HomeComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  pictures: Picture[] = [];
  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    this.pictureService.showPictures().subscribe(
      res => {
        this.pictures = res;
        this.showSuccessMessage = true;
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
}
