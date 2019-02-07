import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlbumService } from '../album-create/album.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css'],
  providers: [AlbumService]
})
export class AlbumCreateComponent implements OnInit {
  users: Object; /// bug ici
  showSuccessMessage: boolean;
  serverErrorMessages: string;

  helper = new JwtHelperService();

  constructor(
    private data: UserService,
    private AlbumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = this.data.getToken();
    const decodedToken = this.helper.decodeToken(token);
    this.users = decodedToken._id;
    console.log(this.users); // bug ici
  }

  onSubmit(form: NgForm) {
    console.log(form.value.name + ' hey');
    console.log('oh ' + form.value); /// bug ici
    this.AlbumService.postAlbum(form.value).subscribe(
      res => {
        console.log('res' + res);
        // console.log(form.value);
        this.showSuccessMessage = true;
      },
      err => {
        if (err) {
          this.serverErrorMessages = err + '<br/>';
        } else {
          this.serverErrorMessages =
            'Something went wrong. Please contact admin';
        }
      }
    );
    // this.router.navigate(['/home']);
  }
}