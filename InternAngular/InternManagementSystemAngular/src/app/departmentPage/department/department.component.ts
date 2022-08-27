import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIserviceService } from '../apiservice.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public departmentForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private service:APIserviceService,
    private http:HttpClient,
    private router:Router)
     { }

  ngOnInit(): void {
    this.departmentForm = this.formBuilder.group({
      DesignationName:[''],
      RoleName:[''],
      DepartMent:['']
    })
  }
  departmentInfo() {
    let obj ={
      "DesignationName": this.departmentForm.value.DesignationName,
      "RoleName": this.departmentForm.value.RoleName,
      "DepartMent": this.departmentForm.value.DepartMent

    }
    console.log("Object",obj);
    this.service. departmentDetails(obj).subscribe(res =>{
      alert("Department Details Added successfully Thanks!");
      
      this.departmentForm.reset();
      this.router.navigate(["departmentdisplay"])
    }, error=>{
      alert("Server Error Data not inserted please try again")
    })
  }

}