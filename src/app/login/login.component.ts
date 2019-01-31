import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    let user = JSON.stringify(this.loginForm.value);
    return this.data.loginUser(user);
  }

  ngOnInit() {}
}
