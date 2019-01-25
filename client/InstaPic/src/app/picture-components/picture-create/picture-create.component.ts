import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-create',
  templateUrl: './picture-create.component.html'
})
export class PictureCreateComponent {
  newPicture = 'HELLO';
  enteredValue = '';
  onAddPicture() {
    console.dir(this.enteredValue);
    this.newPicture = this.enteredValue;
  }
}
