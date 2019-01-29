import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Picture } from './picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  selectedPicture: Picture = {
    userId: 'test',
    image: '',
    albumId: '',
    description: '',
    localisation: '',
    camera: '',
    likes: 0,
    comments: 0
  };

  constructor(private http: HttpClient) {}

  postPicture(picture: Picture) {
    // console.log(picture);
    return this.http.post(environment.apiBaseUrl + '/picture/create', picture);
  }

  showPictures() {
    return this.http.get(environment.apiBaseUrl + '/picture/');
  }
}
