/**
  * @variable = UserList array 
  * @gets the events from child app-edit-user 
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GetUsersService } from '../get-users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList: any;
  number: number;

  constructor(private authService: AuthService, private getUsersService: GetUsersService) {
    this.getJSONUsers();
    this.checkUser();
  }

  ngOnInit() {

  }
  
  addUserFunc(addUser: string) {
    this.userList.push({ id: this.number, name: addUser });
    this.number =  this.userList.length +1
  }

  removeUserFunc() {
    this.userList.shift();
  }

  getJSONUsers() {
    let url = 'users'
    this.getUsersService.getUsers(url)
      .then(response => response.json())
      .then(json => {
        this.userList = json;
        this.number =  this.userList.length +1;
      })
  }

  checkUser() {
    return Boolean(this.authService.checkIfLoggedIn());
  }
}
