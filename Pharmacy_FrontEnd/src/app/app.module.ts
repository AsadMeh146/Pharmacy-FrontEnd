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

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AddManufacturerComponent,
    EditManufacturerComponent,
    AddShipperComponent,
    EditShipperComponent,
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
