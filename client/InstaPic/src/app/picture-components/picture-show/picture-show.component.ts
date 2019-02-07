import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture-create/picture.model';
import { PictureService } from '../picture-create/picture.service';
import { UserService } from 'src/app/shared/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decode } from 'punycode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture-show',
  templateUrl: './picture-show.component.html',
  styleUrls: ['./picture-show.component.css']
})
export class PictureShowComponent implements OnInit {
  pictures: Picture[] = [];
  helper = new JwtHelperService();
  id: string;

  constructor(
    private pictureService: PictureService,
    private userService: UserService,
    private route: ActivatedRoute
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
}
