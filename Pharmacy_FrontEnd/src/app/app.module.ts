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

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AddManufacturerComponent,
    EditManufacturerComponent,
    AddShipperComponent,
    EditShipperComponent,
    AddStockComponent,
    EditStockComponent,
    OrderStockComponent,
    ReceiveStockComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddpharmacyComponent,
    ViewpharmacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
