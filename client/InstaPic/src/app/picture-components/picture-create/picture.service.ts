import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Picture } from "./picture.model";

@Injectable({
  providedIn: "root"
})
export class PictureService {
  selectedPicture: Picture = {
    id: "",
    userId: "test",
    image: "",
    albumId: "",
    description: "",
    localisation: "",
    camera: "",
    likes: 0,
    comments: 0
  };

  constructor(private http: HttpClient) {}

  postPicture(picture: Picture) {
    // console.log(picture);
    return this.http.post(environment.apiBaseUrl + "/picture/create", picture);
  }

  showPictures() {
    return this.http.get(environment.apiBaseUrl + "/picture/");
  }

  showOnePicture(id: String) {
    return this.http.get(environment.apiBaseUrl + `/picture/` + id);
  }

  delPicture(id: String) {
    return this.http.delete(environment.apiBaseUrl + "/picture/" + id);
  }

  likePicture(userId, pictureId) {
    return this.http.put(
      environment.apiBaseUrl + "/picture/like/" + pictureId,
      {
        likes: userId
      }
    );
  }

  isLiked(userId, pictureId) {
    return this.http.get(
      environment.apiBaseUrl + "/picture/like/" + pictureId + "/" + userId
    );
  }

  unlikePicture(userId, pictureId) {
    return this.http.put(
      environment.apiBaseUrl + "/picture/unlike/" + pictureId,
      {
        likes: userId
      }
    );
  }
}
