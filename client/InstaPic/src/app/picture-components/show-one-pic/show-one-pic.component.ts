import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture-create/picture.model';
import { PictureService } from '../picture-create/picture.service';

@Component({
  selector: 'app-show-one-pic',
  templateUrl: './show-one-pic.component.html',
  styleUrls: ['./show-one-pic.component.css']
})
export class ShowOnePicComponent implements OnInit {
  picture: Picture[] = [];
  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    // const id = this.pictureService.id;
    // this.showOnePicture(id);
  }

  private showOnePicture(id) {
    this.pictureService.showOnePicture(id).subscribe(picture => {
      console.log(picture);
      this.picture = picture as Picture[];
    });
  }
}
