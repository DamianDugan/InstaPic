import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture-create/picture.model';
import { PictureService } from '../picture-create/picture.service';

@Component({
  selector: 'app-picture-show',
  templateUrl: './picture-show.component.html',
  styleUrls: ['./picture-show.component.css']
})
export class PictureShowComponent implements OnInit {
  pictures: Picture[] = [];
  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    this.showPictures();
  }

  private showPictures() {
    this.pictureService.showPictures().subscribe(pictures => {
      console.log(pictures);
      this.pictures = pictures as Picture[];
    });
  }
}
