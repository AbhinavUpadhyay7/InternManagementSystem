import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/account/apiservice.service';
import { APIserviceService } from '../apiservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
interns:any=[];
  constructor(private interndata:APIserviceService) { 
    interndata.getInternDetails().subscribe((data)=>{ 
      console.log("Data",data)
      this.interns=data
      console.log("=======data check",this.interns)
    }
    )
  }

  ngOnInit(): void {
  }

}
