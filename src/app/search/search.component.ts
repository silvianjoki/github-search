import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserfinderService } from '../userfinder.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username= string;

@Output() getUser = new EventEmitter<string>();



  

  constructor() {}

  

  ngOnInit(): void {
  }

}
