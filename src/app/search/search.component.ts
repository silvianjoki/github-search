import { Component, OnInit } from '@angular/core';

import { UserfinderService } from '../userfinder.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // username= string;
  user:any
  repos: any

  constructor(private userfinderservice: UserfinderService) {
    this.userfinderservice.findUser().subscribe (user=> {
      console.log(user);
      this.user = user
    })

    this.userfinderservice.findRepo().subscribe (repos=> {
      console.log(repos);
      this.repos= reposg
    })
  }

  

  ngOnInit(): void {
  }

}
