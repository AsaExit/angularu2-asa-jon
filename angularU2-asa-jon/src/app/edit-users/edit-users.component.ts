/**
  * @variable declares single variable used only to empty the inputfield after usage
  * @paraam Emits an event containing a given value, to parent and for manipulation of userList array 
*/ 

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

export class EditUsersComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<string>();

  public clearInput: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  add(value: string) {
    this.addUserEvent.emit(value)
    this.clearInput = "";
  }

  remove() {
    this.removeUserEvent.emit()
  }
}
