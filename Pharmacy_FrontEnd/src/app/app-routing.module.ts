import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { AddManufacturerComponent } from './Admin/Manufacturer-Details/add-manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './Admin/Manufacturer-Details/edit-manufacturer/edit-manufacturer.component';
import { AddShipperComponent } from './Admin/Shipper-Details/add-shipper/add-shipper.component';
import { EditShipperComponent } from './Admin/Shipper-Details/edit-shipper/edit-shipper.component';
import { AddStockComponent } from './Admin/Stock-Details/add-stock/add-stock.component';
import { EditStockComponent } from './Admin/Stock-Details/edit-stock/edit-stock.component';
import { AddCategoryComponent } from './Admin/Category-Details/add-category/add-category.component';
import {AddpharmacyComponent} from './Owner/pharmacy/addpharmacy/addpharmacy.component';
import {ViewpharmacyComponent} from './Owner/pharmacy/viewpharmacy/viewpharmacy.component';
import { AdminComponent } from './Owner/Admin-Details/admin/admin.component';
import { AddEmployeeComponent } from './Admin/Employee-Details/add-employee/add-employee.component';
const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'add-manufacturer',component:AddManufacturerComponent},
  {path:'edit-manufacturer',component:EditManufacturerComponent},
  {path:'add-shipper',component:AddShipperComponent},
  {path:'edit-shipper',component:EditShipperComponent},
  {path:'add-product',component:AddStockComponent},
  {path:'edit-product',component:EditStockComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'add-pharmacy',component:AddpharmacyComponent},
  {path:'view-pharmacy',component:ViewpharmacyComponent},
  {path:'add-admin',component:AdminComponent},
  {path:'add-employee',component:AddEmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
