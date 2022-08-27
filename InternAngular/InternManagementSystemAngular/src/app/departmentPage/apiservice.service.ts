import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departmentmodel } from './departmentmodel';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  constructor(private myhttp:HttpClient) { }
  readonly departmentUrl="https://localhost:44398/api/Designations";
  internsData:Departmentmodel=new Departmentmodel();
  
  departmentDetails(obj:any){
    return this.myhttp.post(this.departmentUrl,obj);
  }
  departmentdisplay(){
    return this.myhttp.get(this.departmentUrl)
  }
}
