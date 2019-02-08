import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users: Object;
  helper = new JwtHelperService();

  constructor(private data: UserService) {}

  getAllUsers() {
    this.data.showAll().subscribe(data => {
      this.users = data;
    });
  }

  singleUser(id: string) {
    return this.data.userGetOne(id);
  }

  ngOnInit() {
    const token = this.data.getToken();
    const decodedToken = this.helper.decodeToken(token);
    if (decodedToken) {
      const userAdmin = decodedToken.isAdmin;
      if (userAdmin) return this.getAllUsers();
      return this.data.toHome();
    } else {
      this.data.toHome();
    }
  }
}
