import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserfinderService {

  private username: string;
  private repo: string;
  private clientid = '2823a44a04bb254e'
  private clientsecret ='3e35f41328d7f5c67900c8cbfaf5bd94c471f495'

  constructor() { }
}
