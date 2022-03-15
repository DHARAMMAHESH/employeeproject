import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  loginform:FormGroup=new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  ngOnInit(): void {
  }
  signin(){
    this.loginService.logindetails(this.loginform.value).subscribe(
      (value:any)=>
      {
        alert("login successfully");
        localStorage.setItem("token",value.token)
        this.router.navigateByUrl("/dashboard");
      },
      (error:any)=>{
        alert("invalid user")
        
      }
    )
  }

}
