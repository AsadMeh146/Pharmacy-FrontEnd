import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { AddManufacturerComponent } from './Admin/Manufacturer-Details/add-manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './Admin/Manufacturer-Details/edit-manufacturer/edit-manufacturer.component';
import { AddShipperComponent } from './Admin/Shipper-Details/add-shipper/add-shipper.component';
import { AddLoanComponent } from './Admin/Loan-Details/add-loan/add-loan.component';
import { ViewloanComponent } from './Owner/viewloan/viewloan.component';
import {ViewAdminComponent} from './Owner/Admin-Details/view-admin/view-admin.component';
import { ViewEmployeeComponent } from './Admin/Employee-Details/view-employee/view-employee.component';
import { EditShipperComponent } from './Admin/Shipper-Details/edit-shipper/edit-shipper.component';
import { AddStockComponent } from './Admin/Stock-Details/add-stock/add-stock.component';
import { EditStockComponent } from './Admin/Stock-Details/edit-stock/edit-stock.component';
import { AddCategoryComponent } from './Admin/Category-Details/add-category/add-category.component';
import {AddpharmacyComponent} from './Owner/pharmacy/addpharmacy/addpharmacy.component';
import {ViewpharmacyComponent} from './Owner/pharmacy/viewpharmacy/viewpharmacy.component';
import { AdminComponent } from './Owner/Admin-Details/admin/admin.component';
import { AddEmployeeComponent } from './Admin/Employee-Details/add-employee/add-employee.component';
import { AddcustomerComponent } from './Employee/CustomerDetail/addcustomer/addcustomer.component';
import { OrderStockComponent } from './Admin/Stock-Details/order-stock/order-stock.component';
import { ReceiveStockComponent } from './Admin/Stock-Details/receive-stock/receive-stock.component';
import { StockDetailsComponent } from './Admin/Stock-Details/stock-details/stock-details.component';
import{AdminDashboardComponent} from './Owner/ownerSidebar/admin-dashboard/admin-dashboard.component';
import { OwnerSidebarComponent } from './Owner/ownerSidebar/owner-sidebar/owner-sidebar.component';
import { ShowStockComponent } from './Employee/show-stock/show-stock.component';
const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'Owner', component:AdminDashboardComponent,
    children:
    [
      {path:'add-admin',component:AdminComponent},
      {path:'view-admin',component:ViewAdminComponent},
      {path:'view-pharmacy',component:ViewpharmacyComponent},
      {path:'view-pharmacy',component:ViewpharmacyComponent},
      {path:'view-loanapp',component:ViewloanComponent},
      {path:'add-pharmacy',component:AddpharmacyComponent}
    ]
  },
  {path:'signup',component:SignUpComponent},
  {path:'add-manufacturer',component:AddManufacturerComponent},
  {path:'edit-manufacturer',component:EditManufacturerComponent},
  {path:'add-shipper',component:AddShipperComponent},
  {path:'edit-shipper',component:EditShipperComponent},
  

  {path:'add-loan',component:AddLoanComponent},

  
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'view-employee',component:ViewEmployeeComponent},
  {path:'add-product',component:AddStockComponent},
  {path:'edit-product',component:EditStockComponent},
  {path:'add-category',component:AddCategoryComponent},

  {path:'customer-order',component:AddcustomerComponent},
  {path:'order-stock',component:OrderStockComponent},
  {path:'receive-stock',component:ReceiveStockComponent},
  {path:'stock-details',component:StockDetailsComponent},
  {path:'get-stock-details',component:ShowStockComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
