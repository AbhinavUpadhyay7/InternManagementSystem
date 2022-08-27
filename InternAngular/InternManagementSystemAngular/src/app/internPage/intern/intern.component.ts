import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIserviceService } from '../apiservice.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {

 public internForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private service:APIserviceService,
    private http:HttpClient,
    private router:Router)
     { }

  ngOnInit(): void {
    this.internForm = this.formBuilder.group({
      InternName:[''],
      PhoneNumber:[''],
      EmailID:[''],
      Address:['']
    })
  }
  internInfo() {
    let obj ={
      "InternName": this.internForm.value.InternName,
      "PhoneNumber": this.internForm.value.PhoneNumber,
      "EmailID": this.internForm.value.EmailID,
      "Address": this.internForm.value.Address

    }
    console.log("Object",obj);
    this.service.internDetails(obj).subscribe(res =>{
      alert("Intern Details Added successfully Thanks!");
      
      this.internForm.reset();
      this.router.navigate(["display"])
    }, error=>{
      alert("Server Eroor Data not inserted please try again")
    })
  }

}

