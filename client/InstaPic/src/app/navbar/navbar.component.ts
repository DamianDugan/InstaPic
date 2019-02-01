import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  helper = new JwtHelperService();
  constructor(private userService: UserService) {}

  ngOnInit() {}

  loggued() {
    var token = this.userService.getToken();

    if (token) return true;
    else return false;
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
