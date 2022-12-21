import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddManufacturerComponent } from './Admin/Manufacturer-Details/add-manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './Admin/Manufacturer-Details/edit-manufacturer/edit-manufacturer.component';
import { AddShipperComponent } from './Admin/Shipper-Details/add-shipper/add-shipper.component';
import { EditShipperComponent } from './Admin/Shipper-Details/edit-shipper/edit-shipper.component';
import { AddStockComponent } from './Admin/Stock-Details/add-stock/add-stock.component';
import { EditStockComponent } from './Admin/Stock-Details/edit-stock/edit-stock.component';
import { OrderStockComponent } from './Admin/Stock-Details/order-stock/order-stock.component';
import { ReceiveStockComponent } from './Admin/Stock-Details/receive-stock/receive-stock.component';
import { AddCategoryComponent } from './Admin/Category-Details/add-category/add-category.component';
import { EditCategoryComponent } from './Admin/Category-Details/edit-category/edit-category.component';
import {AddpharmacyComponent} from './Owner/pharmacy/addpharmacy/addpharmacy.component';
import {ViewpharmacyComponent} from './Owner/pharmacy/viewpharmacy/viewpharmacy.component';
import { AdminComponent } from './Owner/Admin-Details/admin/admin.component';
import { AddEmployeeComponent } from './Admin/Employee-Details/add-employee/add-employee.component';
import { AddLoanComponent } from './Admin/Loan-Details/add-loan/add-loan.component';
import { ViewloanComponent } from './Owner/viewloan/viewloan.component';
import { ViewAdminComponent } from './Owner/Admin-Details/view-admin/view-admin.component';
import { ViewEmployeeComponent } from './Admin/Employee-Details/view-employee/view-employee.component';
import { AddcustomerComponent } from './Employee/CustomerDetail/addcustomer/addcustomer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StockDetailsComponent } from './Admin/Stock-Details/stock-details/stock-details.component';
import { OwnerSidebarComponent } from './Owner/ownerSidebar/owner-sidebar/owner-sidebar.component';
import { AdminDashboardComponent } from './Owner/ownerSidebar/admin-dashboard/admin-dashboard.component';
import { ShowStockComponent } from './Employee/show-stock/show-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AddManufacturerComponent,
    EditManufacturerComponent,
    AddShipperComponent,
    EditShipperComponent,
    AddpharmacyComponent,
    ViewpharmacyComponent,
    AdminComponent,
    AddEmployeeComponent,
    AddLoanComponent,
    ViewloanComponent,
    ViewAdminComponent,
    ViewEmployeeComponent,
    AddStockComponent,
    EditStockComponent,
    OrderStockComponent,
    ReceiveStockComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddpharmacyComponent,
    ViewpharmacyComponent,
    AdminComponent,
    AddEmployeeComponent,
    AddcustomerComponent,
    StockDetailsComponent,
    OwnerSidebarComponent,
    AdminDashboardComponent,
    ShowStockComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
