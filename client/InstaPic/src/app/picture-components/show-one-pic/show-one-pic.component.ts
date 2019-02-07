import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture-create/picture.model';
import { PictureService } from '../picture-create/picture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-one-pic',
  templateUrl: './show-one-pic.component.html',
  styleUrls: ['./show-one-pic.component.css']
})
export class ShowOnePicComponent implements OnInit {
  picture: object; // Picture[] = [] as Picture[];

  public id: string;
  constructor(
    private pictureService: PictureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pictureService.showOnePicture(this.id).subscribe(pict => {
      this.picture = pict;
      console.log(pict);
    });
  }

  // private showOnePicture(id) {
  //   this.pictureService.showOnePicture(id).subscribe(picture => {
  //     console.log(picture);
  //     this.picture = picture as Picture[];
  //   });
  // }
}
