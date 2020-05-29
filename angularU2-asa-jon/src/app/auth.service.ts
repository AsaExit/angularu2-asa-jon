/**
  * @object to compare input from login with Adminfull.
  * check out if user is logged in or not
*/
import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: string;

  public admins: AdminFull =
    {
      firstName: 'Darth',
      lastName: 'Vader',
      email: 'darth.vader@darkside.com',
      password: '0987654321'
    };

  constructor( private router: Router) {

  }

  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  login(user) {
    if (user.email == this.admins.email && user.password == this.admins.password) {
      localStorage.setItem('user', user.email);
      this.loggedUser = user;
      this.router.navigate(['/dashboard'])
    }
  }

  logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
