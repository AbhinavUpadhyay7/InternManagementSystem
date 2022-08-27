import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signupForm!:FormGroup;
  currentUserName: any;
  isLoggesIn: any;
  logout: any;
  constructor(private formBuilder:FormBuilder,
    private service:APIServiceService,
    private http:HttpClient,
    private router:Router)
     { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      UserName:[''],
      FirstName:[''],
      LastName:[''],
      Contact:[''],
      Password:['']
    })
  }
  SignUp() {
    let obj ={
      "UserName": this.signupForm.value.UserName,
      "FirstName": this.signupForm.value.FirstName,
      "LastName": this.signupForm.value.LastName,
      "Contact": this.signupForm.value.Contact,
      "Password": this.signupForm.value.Password

    }
    console.log("======>Object",obj);
    this.service.signup(obj).subscribe(res =>{
      alert("Signup Successfull");
      
      this.signupForm.reset();
      this.router.navigate(["login"])
    }, 
    error=>{
      alert("Please fill All Details")
    })
  }
  get UserName(): FormControl {
    return this.signupForm.get('UserName') as FormControl;
  }
  get FirstName(): FormControl {
    return this.signupForm.get('FirstName') as FormControl;
  }

  get LastName(): FormControl {
    return this.signupForm.get('LastName') as FormControl;
  }
  get Contact(): FormControl {
    return this.signupForm.get('Contact') as FormControl;
  }
  get Password(): FormControl {
    return this.signupForm.get('Password') as FormControl;
  }

}
