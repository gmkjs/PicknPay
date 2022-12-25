import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup(
    {
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    }
    )

  constructor(public lserv:LoginService, private rtr: Router) { }

  ngOnInit(): void {
  }
   
  login(){
    console.log('login works')
let response = this.lserv.validateUser(this.loginform.value)
    if(response == true){
      this.rtr.navigate(['dboard']);
    }
  }
}
