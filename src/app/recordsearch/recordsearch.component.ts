import { Component, OnInit } from '@angular/core';

import { RecordsearchService } from './recordsearch.service';

@Component({
  selector: 'app-recordsearch',
  templateUrl: './recordsearch.component.html',
  styleUrls: ['./recordsearch.component.css']
})
export class RecordsearchComponent implements OnInit {

  constructor(private RecordsearchService: RecordsearchService) { }

  searchTerm: string
  result: any

  ngOnInit() {
  }

  searchRecords(searchString: string){
    this.result = this.RecordsearchService.searchRecords(this.searchTerm)
  }

}
