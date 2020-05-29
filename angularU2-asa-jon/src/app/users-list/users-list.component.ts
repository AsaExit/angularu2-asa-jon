
/**
  * @function. toggles the color.
  * @variable textColor for to toggle the color of user-list-items, bool-> togglefunction.
  * @Gets users to display in user-list-items. 
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  @Input() users: string[];

  textColor: string = 'red';
  bool: boolean = false;
  
  constructor() {

  }

  ngOnInit() {

  }

  toggleColor() {
    if (this.bool = !this.bool) {
      this.textColor = 'green';
    }
    else {
      this.textColor = 'red';
    }
  }
}