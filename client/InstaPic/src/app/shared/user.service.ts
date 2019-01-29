import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  selectedUser: User = {
    id: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    picture: "",
    description: "",
    token: "",
    followers: 0,
    following: 0
  };

  // selectedPicture: Picture= {
  //   id:
  // };

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + "/signup/", user);
  }

  showAll() {
    return this.http.get(environment.apiBaseUrl + "/user/");
  }

  showUser(id: String) {
    return this.http.get(environment.apiBaseUrl + `/user/:id` + id);
  }

  update(user: User) {
    return this.http.put(environment.apiBaseUrl + `/user/:id`, user);
  }
}
