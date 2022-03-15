import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor() { 
    this.createemployee.get('role')?.valueChanges.subscribe(
      data=>{
        if(data=='Frontend Engineer')
        {
          this.createemployee.addControl('HTML',new FormControl());
          this.createemployee.addControl('CSS',new FormControl());
          this.createemployee.addControl('JAVASCRIPT',new FormControl());
          this.createemployee.addControl('ANGULAR',new FormControl());
          this.createemployee.removeControl('nodejs' );
          this.createemployee.removeControl('expressjs');
          this.createemployee.removeControl('mongodb' );
        }
        else{
          this.createemployee.addControl('nodejs',new FormControl());
          this.createemployee.addControl('expressjs',new FormControl());
          this.createemployee.addControl('mongodb',new FormControl());
          this.createemployee.removeControl('HTML');
          this.createemployee.removeControl('CSS');
          this.createemployee.removeControl('JAVASCRIPT');
          this.createemployee.removeControl('ANGULAR');

        }
      }
    )
  }
  createemployee:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.min(3),Validators.max(15)]),
    mobile:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    dob:new FormControl([null,]),
    address:new FormControl({
      addressline:new FormControl(null,[Validators.required,Validators.min(3),Validators.max(30)]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      pincode:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    education:new FormArray([]),
    role:new FormControl()

  })
  get educationFormArray()
  {
    return this.createemployee.get('education') as FormArray;
  }

  ngOnInit(): void {
  }
  submit(){
    alert("createemployee")
    console.log(this.createemployee);
  }
  add(){
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl(null,Validators.required),
        year:new FormControl(null,Validators.required),
        percentage:new FormControl(null,Validators.required)
      })
    )
  }
  delete(i:any){
    this.educationFormArray.removeAt(i);
  }

}
