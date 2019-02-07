import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Album } from './album.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  selectedAlbum: Album = {
    pictureId: '',
    userId: '',
    name: ''
  };
  constructor(private http: HttpClient) {}

  postAlbum(album: Album) {
    // console.log(picture);
    return this.http.post(environment.apiBaseUrl + '/album/', album);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
