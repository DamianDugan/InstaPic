import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../data.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required]
    });
  }

  onSubmit() {
    const password = this.registerForm.controls.password.value;
    const confirmPassword = this.registerForm.controls.confirm_password.value;

    let user = JSON.stringify(this.registerForm.value);
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (password === confirmPassword) {
      // console.log(this.registerForm);
      this.success = true;
      this.data.addUser(user).subscribe();
    }
  }
  ngOnInit() {}
}
