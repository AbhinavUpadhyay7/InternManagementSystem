import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupModel } from './signup-model';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private myhttp:HttpClient) { }
  readonly signupUrl="https://localhost:44398/api/Users";
  registerData:SignupModel=new SignupModel();
  
  signup(obj:any){
    return this.myhttp.post(this.signupUrl,obj);
  }
  loginUser(loginInfo:Array<any>){
    return this.myhttp.post(this.signupUrl+'/loginuser',{
      UserName:loginInfo[0],
      Password:loginInfo[1]

    },
    {
      responseType:'text',
    });
  }
}
