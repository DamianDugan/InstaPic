import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  helper = new JwtHelperService();
  id: String;
  // currentUSer = Profil user page
  currentUser: Object;
  // user = user logged
  user: Object;
  AdminToken: Boolean;
  idEqualCurrentUser: Boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private data: UserService
  ) {}

  ngOnInit() {
    const user = this.data.getToken();
    const decodedToken = this.helper.decodeToken(user);
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.showUser(this.id).subscribe(res => {
      this.currentUser = res;
      if (decodedToken._id === this.id) {
        this.idEqualCurrentUser = true;
      }
    });

    this.AdminToken = decodedToken.isAdmin;
  }

  follow() {
    console.log('Suce pute');
    const user = this.data.getToken();
    const decodedToken = this.helper.decodeToken(user);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(decodedToken._id);
    this.data.follow(decodedToken._id, this.id).subscribe(test => {
      console.log(test);
    });
  }

  unfollow() {
    const user = this.data.getToken();
    const decodedToken = this.helper.decodeToken(user);
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.unfollow(decodedToken._id, this.id).subscribe(() => {
      console.log('tryphon');
    });
  }
  isAdmin() {
    var token = this.userService.getToken();
    if (token) {
      var decodeToken = this.helper.decodeToken(token);
      var adminDecode = decodeToken.isAdmin;
      if (adminDecode == true) return true;
      else return false;
    } else return false;
  }
}
