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
    followers: 0,
    following: 0
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + "/signup/", user);
  }

  showAll() {
    return this.http.get(environment.apiBaseUrl + "/user/");
  }

  update(user: User) {
    return this.http.put(environment.apiBaseUrl + "/user/:id", user);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/login', authCredentials,this.noAuthHeader);
  }

    //Helper Methods

    setToken(token: string) {
      localStorage.setItem('token', token);
    }
  
    getToken() {
      return localStorage.getItem('token');
    }
  
    deleteToken() {
      localStorage.removeItem('token');
    }
  
    getUserPayload() {
      var token = this.getToken();
      if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
        return null;
    }
  
    isLoggedIn() {
      var userPayload = this.getUserPayload();
      if (userPayload)
        return userPayload.exp > Date.now() / 1000;
      else
        return false;
    }
}
