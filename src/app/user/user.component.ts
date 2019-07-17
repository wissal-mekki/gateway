import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userhttp: UserService) { }

  ngOnInit() {
  }
  addUser(user) {
    const usera = {
      'firstname': user['firstname'],
      'lastname': user['lastname'],
      'birthdate': user['birthdate'],
      'cin': user['cin'],
      'address': user['address'],
      'phone': user['phone'],
      'email': user['email'],
      'login': user['login'],
      'mdp': user['mdp']
    };
 this.userhttp.addUser(usera).subscribe(res => {
      // y console.log(res);
    }, (err) => {
      console.log(err);
    });
  //  this.router.navigate(['/users']);
  }
}
