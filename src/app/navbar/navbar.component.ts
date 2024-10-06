import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { UserSeviceService } from '../customServices/user-sevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public route: Router ,public userService : UserSeviceService)
{}

onclick(){
  this.userService.loginFlag = false;
  this.route.navigate(['/login'])
}

}
