import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PictureService } from './picture.service';

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

  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'photo'
  });
  // This is the default title property created by the angular cli. Its responsible for the app works
  title = 'app works!';

  constructor(private pictureService: PictureService, private router: Router) {}

  ngOnInit() {
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
      console.log('ImageUpload:uploaded:', item, status, response);
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
