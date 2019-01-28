import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  host2: String = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  login(data) {}
}
