import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class JwtService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient
      .post<{ access_token: string }>("http://localhost:8000/login/", {
        email,
        password
      })
      .pipe(
        tap(res => {
          localStorage.setItem("access_token", res.access_token);
        })
      );
  }

  register(email: string, password: string) {
    return this.httpClient
      .post<{ access_token: string }>("http://localhost:8000/signup/", {
        email,
        password
      })
      .pipe(
        tap(res => {
          this.login(email, password);
        })
      );
  }
}
