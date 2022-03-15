import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ContactUsModule } from './contact-us/contact-us.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductListComponent } from './shopping/product-list/product-list.component';
import { ProductDetailsComponent } from './shopping/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AllemployeesComponent,
    CreateemployeeComponent,
    EmployeeDetailsComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    ShoppingComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ContactUsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
