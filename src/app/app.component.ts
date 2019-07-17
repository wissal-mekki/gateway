import { Component, OnInit} from '@angular/core';
import {LoginService} from './login/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router) {
  }

  ngOnInit() {
   /* let token=this.loginservice.loadToken();
    console.log('aaa'+token);
    if(!token) {
      this.router.navigate(['/login']);
    }
*/
  }
}