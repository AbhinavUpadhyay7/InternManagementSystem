import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginauth: APIServiceService,
    private router:Router) { }

  ngOnInit(): void { }

  loginForm = new FormGroup({
    UserName: new FormControl("",[Validators.required]),
    Password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  });
  
  isUservalid:boolean = false;
  
  LoginSubmit() {
    console.log(this.loginForm.value);
    this.loginauth
   .loginUser([this.loginForm.value.UserName,this.loginForm.value.Password])
    .subscribe(res =>{
      if (res == 'Login unsuccessfull') { 
        this.isUservalid=false;
        alert('Please fill correct UserName PassWord and try again');
      }
      else{
        this.isUservalid=true;
        alert('Login done');
        this.router.navigateByUrl('/Details');
      }
    }
    );
  }
  get UserName(): FormControl {
    return this.loginForm.get('UserName') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('Password') as FormControl;
  }
}
