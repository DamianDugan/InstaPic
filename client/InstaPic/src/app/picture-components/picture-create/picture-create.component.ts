import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PictureService } from './picture.service';

@Component({
  selector: 'app-picture-create',
  templateUrl: './picture-create.component.html',
  styleUrls: ['./picture-create.component.css'],
  providers: [PictureService]
})
export class PictureCreateComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  constructor(private pictureService: PictureService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.pictureService.postPicture(form.value).subscribe(
      res => {
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
