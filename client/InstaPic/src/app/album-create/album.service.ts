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
    user_id: '',
    name: ''
  };
  constructor(private http: HttpClient) {}

  postAlbum(album: Album) {
    // console.log(picture);
    return this.http.post(environment.apiBaseUrl + '/album/', album);
  }

  getAlbumsByUser(user_id: String) {
    return this.http.get(environment.apiBaseUrl + '/album/' + user_id);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
