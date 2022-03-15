import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllemployesService {

  constructor(private httpclient:HttpClient) { }
  getallemployees():Observable<any>
  {
    return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }
  getfilterdallemployees(search:any):Observable<any>
    {
     return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?filter="+search)
    }
  getsortedallemployees(columnname:any, order:any):Observable<any>
    {
     return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?sortby="+columnname+"&order="+order);
    }
    getpageedallemployees(page:any, limit:any):Observable<any>
    {
     return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?page="+page+"&limit="+limit);
    }
    deleteallemployees(id:any):Observable<any>
    {
      return this.httpclient.delete("https://6222413b666291106a21d80b.mockapi.io/employees/"+id)
    }
    getDetails(id:any):Observable<any>
    {
      return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees/"+id)
    }
}

