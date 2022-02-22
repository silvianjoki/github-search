import { Component, OnInit } from '@angular/core';

import { UserfinderService } from '../userfinder.service';
import { DatecountPipe } from '../datecount.pipe';

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
      this.repos= repos
    })
  }

  findUser() {
    this.userfinderservice.userUpdate(this.user)
    this.userfinderservice.findUser().subscribe(user => {
      this.user = user
      console.log(user)
    })
    this.userfinderservice.repoUpdate(this.repos)
    this.userfinderservice.findRepo().subscribe(repos=> {
      this.repos = repos
      console.log(repos )
    })
  }

  fetchRepo() {
    this.userfinderservice.repoUpdate(this.repos)
    this.userfinderservice.fetchRepo().subscribe(repos => {
      this.repos = repos
      console.log(repos)
    })
  }

  

  ngOnInit(): void {
  }

}
