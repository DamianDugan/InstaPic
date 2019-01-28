import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Picture } from "../shared/picture.model";

@Injectable({
  providedIn: "root"
})
export class PictureService {
  selectedPicture: Picture = {
    user_id: "",
    image: "",
    description: "",
    album_id: "",
    likes: "",
    comments: "",
    camera: "",
    localisation: ""
  };

  constructor(private http: HttpClient) {}

  showPictures() {
    return this.http.get(environment.apiBaseUrl + "/picture/");
  }
}
