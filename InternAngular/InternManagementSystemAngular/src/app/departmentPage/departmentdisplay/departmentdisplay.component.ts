import { Component, OnInit } from '@angular/core';
import { APIserviceService } from '../apiservice.service';

@Component({
  selector: 'app-departmentdisplay',
  templateUrl: './departmentdisplay.component.html',
  styleUrls: ['./departmentdisplay.component.css']
})
export class DepartmentdisplayComponent implements OnInit {

  departments:any;
  constructor(private departmentdata:APIserviceService) { 
    departmentdata.departmentdisplay().subscribe((data)=>{ 
      console.log("Data",data)
      this.departments=data
    }
    )
  }

  ngOnInit(): void {
  }

}
