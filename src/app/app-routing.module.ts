import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsModule } from './about-us/about-us.module';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { AuthGuard } from './auth.guard';
import { CommunicationComponent } from './communication/communication.component';
import { CompanyInfoComponent } from './contact-us/company-info/company-info.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [

  {path:"login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent,canActivate:[AuthGuard],
  children:[
    {path:"allemployees", component: AllemployeesComponent},
    {path:"createemployee", component: CreateemployeeComponent},
    {path:"contact-us", component: CompanyInfoComponent},
    {path:"employee-details/:id", component: EmployeeDetailsComponent},
    {path:"communication", component: CommunicationComponent},
    {path:"shopping", component: ShoppingComponent},
    {
      path: 'about-us',
      loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
      path: 'roles',
      loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
