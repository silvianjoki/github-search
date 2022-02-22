import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserfinderService {

  private username: string;
  private repo!: string;
  private clientid = '2823a44a04bb254e'
  private clientsecret ='3e35f41328d7f5c67900c8cbfaf5bd94c471f495'

  constructor(private http: HttpClient) {
    this.username = 'silvianjoki'
  }

  findUser() {
    interface ApiResponse {
      login:string
      username: string
      bio:string
      followers:any
      following:any
      public_repos:any
      avatar_url:any
      created_at:anyg

    }
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  } 
  findRepo() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }
  fetchRepo() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repo + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }

  userUpdate(username:string) {
    this.username = username;
  }

  repoUpdate(repo:string) {
    this.repo= repo;
  }
}
