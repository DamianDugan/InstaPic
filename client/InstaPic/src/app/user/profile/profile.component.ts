import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from 'src/app/shared/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlbumService } from '../../album-create/album.service';
import { Album } from 'src/app/album-create/album.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();
  albums: Object;
  // albums: Album[] = [];

  constructor(
    private userService: UserService,
    private albumservice: AlbumService
  ) {}

  ngOnInit() {
    const token = this.userService.getToken();
    const decodedToken = this.helper.decodeToken(token);
    const idDecode = decodedToken._id;
    this.userService.showUser(idDecode).subscribe(user => {
      console.log(user);
      this.users = user;
    });
    this.albumservice.getAlbumsByUser(idDecode).subscribe(albumFound => {
      this.albums = albumFound;
      console.log(this.albums);
    });
  }

  deleteAccount(id) {
    this.userService.delUser(id).subscribe(res => {
      this.userService.deleteToken();
    });
  }
}
