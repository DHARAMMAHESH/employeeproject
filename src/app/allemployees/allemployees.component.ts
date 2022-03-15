import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AllemployesService } from '../allemployes.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  allemployeess:any=[];
  search="";
  column="";
  order="";
  page="";
  limit="";

  constructor(private allemployeesService:AllemployesService, private router:Router) { 
    this.allemployeesService.getallemployees().subscribe(
      (data:any)=>{
        this.allemployeess=data;
      },
      (error:any)=>{
        alert("server down");
      }
    )
   }
   view(id:any)
   {
     this.router.navigateByUrl("dashboard/employee-details/"+id);
   }
   filter()
   {
     this.allemployeesService.getfilterdallemployees(this.search).subscribe(
      (data:any)=>{
        this.allemployeess=data;
      },
      (error:any)=>{
        alert("server down");
      }
     )
   }
   sort()
   {
     this.allemployeesService.getsortedallemployees(this.column, this.order).subscribe(
       (data:any)=>{
         this.allemployeess=data;
       },
       (error:any)=>{
         alert("server down");
       }
     )
   }
   next()
   {
     this.allemployeesService.getpageedallemployees(this.page, this.limit).subscribe(
       (data:any)=>{
         this.allemployeess=data;
       },
       (error:any)=>{
         alert("server down");
       }
     )
   }
   delete(id:any)
   {
     this.allemployeesService.deleteallemployees(id).subscribe(
       (data:any)=>{
         alert("dalete successfully");
       },
       (error:any)=>{
         alert("server down")
       }
     )
  }

  ngOnInit(): void {
  }

}
