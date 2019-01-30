import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  pictures: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPictures().subscribe(data => {
      this.pictures = data;
    });
  }
}
