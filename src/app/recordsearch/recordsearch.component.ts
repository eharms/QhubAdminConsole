import { Component, OnInit } from '@angular/core';

import { RecordsearchService } from './recordsearch.service';
import {searchResultArray} from '../objects';

@Component({
  selector: 'app-recordsearch',
  templateUrl: './recordsearch.component.html',
  styleUrls: ['./recordsearch.component.css']
})
export class RecordsearchComponent implements OnInit {

  constructor(private RecordsearchService: RecordsearchService) { }

  searchTerm: string
  results: searchResultArray;

  ngOnInit() {
  }

  searchRecords(searchString: string){
    this.results = this.RecordsearchService.searchRecords(this.searchTerm)
  }

}
