// getExif(image) {
//   exif.EXIF.getData(image, function() {
//     let make = exif.EXIF.getTag(this, "Make");
//     let model = exif.EXIF.getTag(this, "Model");
//     console.log(make, model);
//   });

//   exif.EXIF.getData(image, function() {
//     let allMetaData = exif.EXIF.getAllTags(this);
//     console.log(allMetaData);
//   });
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PictureService } from './picture.service';
import { JwtHelperService } from '@auth0/angular-jwt';

// import the file uploader plugin
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
// define the constant url we would be uploading to.
const URL = 'http://localhost:8000/picture/upload';

@Component({
  selector: 'app-picture-create',
  templateUrl: './picture-create.component.html',
  styleUrls: ['./picture-create.component.css'],
  providers: [PictureService]
})
export class PictureCreateComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  helper = new JwtHelperService();

  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'photo'
  });
  // This is the default title property created by the angular cli. Its responsible for the app works
  title = 'app works!';

  constructor(private pictureService: PictureService, private router: Router) {}

  isLoggued = function() {
    const token = localStorage.getItem('token');
    const decodedToken = this.helper.decodeToken(token);
    console.log(decodedToken._id);
    return decodedToken._id;
  };

  ngOnInit() {
    // Add _id to formData
    this.uploader.onBuildItemForm = (fileItem, form) => {
      form.append('user_id', this.isLoggued());
      return { fileItem, form };
    };
    // console.log(this.uploader.queue);
    // this.uploader.queue[0].upload();

    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
<<<<<<< HEAD
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log(this.isLoggued());
=======
      console.log("ImageUpload:uploaded:", item, status, response);
>>>>>>> 57fab5839ba1944fe442763bcf44bbd47f84c284
    };
  }

  onSubmit(form: NgForm) {
    this.pictureService.postPicture(form.value).subscribe(
      res => {
        console.log('res' + res);
        // console.log(form.value);
        this.showSuccessMessage = true;
      },
      err => {
        if (err) {
          this.serverErrorMessages = err + '<br/>';
        } else {
          this.serverErrorMessages =
            'Something went wrong. Please contact admin';
        }
      }
    );
    this.router.navigate(['/home']);
  }
}
