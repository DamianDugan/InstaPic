import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Environnement } from "../";

@Injectable({
  providedIn: "root"
})
export class DataService {
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient, private router: Router) {}

  getPictures() {
    return this.http.get("http://localhost:8000/picture");
  }

  getUsers() {
    return this.http.get("http://localhost:8000/user");
  }

  delUser(id) {
    return this.http.delete("http://localhost:8000/user/" + id);
  }

  addUser(user) {
    user = JSON.parse(user);
    return this.http.post("http://localhost:8000/signup/", user);
  }

  updateUser(user) {
    user = JSON.parse(user);
    return this.http.put("http://localhost:8000/user/" + user._id, user);
  }

  loginUser(user) {
    user = JSON.parse(user);
    return this.http
      .post("http://localhost:8000/login/", user, { responseType: "text" })
      .subscribe(res => {
        this.setToken(res);
        this.router.navigate(["/"]);
      });
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    return localStorage.setItem("token", token);
  }

  deleteToken() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  toHome() {
    this.router.navigate(["/"]);
  }
}
