import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products:any=[];
selectedProduct:any={};

view(product:any){
  this.selectedProduct=product;
}
catch(value:any){
  this.selectedProduct={};
  this.products=this.products.filter((data:any)=>data.id!=value);
  // console.log(value)
}
  constructor(private shoppingService:ShoppingService) { 
    this.shoppingService.getdetail().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }


  ngOnInit(): void {
  }

}
