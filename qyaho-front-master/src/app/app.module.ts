import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QrscanComponent } from './components/Qrscan/qrscan.component';
import { GeneratorComponent } from './components/generator/generator.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {NgQrScannerModule } from 'angular2-qrscanner';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerNumComponent } from './components/customer-num/customer-num.component';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
  
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GeneratorComponent,
    QrscanComponent,
    CustomerListComponent,
    CustomerNumComponent,
    DialogComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule,
    NgxQRCodeModule,
    NgQrScannerModule,
    TooltipModule,
    ReactiveFormsModule,   
     MatIconModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
  
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    }),
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [ValidateService, AuthService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
