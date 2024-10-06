import { Component } from '@angular/core';
import { UserSeviceService } from '../customServices/user-sevice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(public userService : UserSeviceService){}

}
