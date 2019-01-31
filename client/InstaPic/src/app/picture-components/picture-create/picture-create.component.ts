declare var require: any;
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { PictureService } from "./picture.service";
const exif = require("exif-js");

@Component({
  selector: "app-picture-create",
  templateUrl: "./picture-create.component.html",
  styleUrls: ["./picture-create.component.css"],
  providers: [PictureService]
})
export class PictureCreateComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  constructor(private pictureService: PictureService, private router: Router) {}

  ngOnInit() {}

  getExif(image) {
    exif.EXIF.getData(image, function() {
      let make = exif.EXIF.getTag(this, "Make");
      let model = exif.EXIF.getTag(this, "Model");
      console.log(make, model);
    });

    exif.EXIF.getData(image, function() {
      let allMetaData = exif.EXIF.getAllTags(this);
      console.log(allMetaData);
    });
  }

  onSubmit(form: NgForm) {
    this.pictureService.postPicture(form.value).subscribe(
      res => {
        console.log("form value: " + form.value.image);
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
    this.router.navigate(["/home"]);
  }
}
