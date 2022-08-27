import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private myhttp:HttpClient) { }
  readonly internUrl="https://localhost:44398/api/Interns";
  internsData:Model=new Model();
  
  internDetails(obj:any){
    return this.myhttp.post(this.internUrl,obj);
  }
  getInternDetails()
    {
      return this.myhttp.get(this.internUrl)
    }
  
}
