import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { AddManufacturerComponent } from './Admin/Manufacturer-Details/add-manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './Admin/Manufacturer-Details/edit-manufacturer/edit-manufacturer.component';
import { AddShipperComponent } from './Admin/Shipper-Details/add-shipper/add-shipper.component';
import {AddpharmacyComponent} from './Owner/pharmacy/addpharmacy/addpharmacy.component';
import {ViewpharmacyComponent} from './Owner/pharmacy/viewpharmacy/viewpharmacy.component';
import {AdminComponent} from './Owner/Admin-Details/admin/admin.component';
import { AddEmployeeComponent } from './Admin/Employee-Details/add-employee/add-employee.component';
import { AddLoanComponent } from './Admin/Loan-Details/add-loan/add-loan.component';
import { ViewloanComponent } from './Owner/viewloan/viewloan.component';
import {ViewAdminComponent} from './Owner/Admin-Details/view-admin/view-admin.component';
import { ViewEmployeeComponent } from './Admin/Employee-Details/view-employee/view-employee.component';
const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'add-manufacturer',component:AddManufacturerComponent},
  {path:'edit-manufacturer',component:EditManufacturerComponent},
  {path:'add-shipper',component:AddShipperComponent},
  {path:'add-pharmacy',component:AddpharmacyComponent},
  {path:'view-pharmacy',component:ViewpharmacyComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'add-loan',component:AddLoanComponent},
  {path:'view-loanapp',component:ViewloanComponent},
  {path:'view-admin',component:ViewAdminComponent},
  {path:'view-employee',component:ViewEmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
