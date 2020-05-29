/**
  *API Service with fetch. 
 * for testing have been using API https://api.softhouse.rocks/ Json placeholder was to slow ,https://jsonplaceholder.typicode.com/.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GetUsersService {
  constructor() { }

  getUsers(url) {
    let base_url = 'https://jsonplaceholder.typicode.com/';
    return fetch(base_url + url);
  }
}