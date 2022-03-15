import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllemployesService } from '../allemployes.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  details:any={};

  constructor(private activatedRoute:ActivatedRoute, private allemployesService:AllemployesService)
   { 
     this.activatedRoute.params.subscribe(
       (data:any)=>{
         console.log(data.id);
         this.getDetails(data.id);
       }
     )
   }

  ngOnInit(): void {
  }
  getDetails(id:any){
    this.allemployesService.getDetails(id).subscribe(
      (data:any)=>{
        this.details=data;
      }
    )
  }

}
