import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

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
    console.log(user);
    user = JSON.parse(user);
    return this.http.put("http://localhost:8000/user/" + user._id, user);
  }

  loginUser(user) {
    user = JSON.parse(user);
    return this.http
      .post("http://localhost:8000/login/", user, this.noAuthHeader)
      .subscribe(res => {
        console.log(res);
        this.setToken(res["token"]);
        console.log(this.getToken());
      });
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    return localStorage.setItem("token", token);
  }
}
