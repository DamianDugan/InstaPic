import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  users: object;
  queryField: FormControl = new FormControl();

  constructor(private _searchService: SearchService) {}

  ngOnInit() {
    // this.queryField.valueChanges;
    // .switchMap(query => this._searchService.search(query))
    // .subscribe(result => (this.results = result.json().users.name));
  }
}
