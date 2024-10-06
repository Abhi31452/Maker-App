import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSeviceService } from '../customServices/user-sevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,public router : Router,public userservice : UserSeviceService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log(username , password)
      
      this.userservice.login(username, password).subscribe(
        (response) => {
          window.alert("Lofin Successfully " )
          this.userservice.loginFlag=true;
          this.router.navigate(["/dashboard"])       
         },
        (error) => {
          console.error('Login failed', error);
          alert(`Login failed: ${error.message || 'Invalid credentials'}`);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
  
}