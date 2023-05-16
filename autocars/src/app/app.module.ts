import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddbenificaireComponent } from './pages/benificaire/addbenificaire/addbenificaire.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ListchauffeurComponent } from './pages/chauffeur/listchauffeur/listchauffeur.component';
import { AddComponent } from './pages/chauffeur/listchauffeur/add/add.component';
import { QRCodeModule} from'angular2-qrcode';
import { BenificaireComponent } from './pages/benificaire/benificaire.component';
import { LoginComponent } from './pages/login/login.component';
import { BondecarburationComponent } from './pages/bondecarburation/bondecarburation.component';
import { AssurenceComponent } from './pages/assurence/assurence.component';
import { AddassurenceComponent } from './pages/assurence/addassurence/addassurence.component';
import { VisiteComponent } from './pages/visite/visite.component';
import { AddvisiteComponent } from './pages/visite/addvisite/addvisite.component';
import { VignetteComponent } from './pages/vignette/vignette.component';
import * as html2pdf from 'html2pdf.js';
import * as annyang from 'annyang';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
    ListchauffeurComponent,
    AddComponent,
    BenificaireComponent,
    LoginComponent,
    AddbenificaireComponent,
    BondecarburationComponent,
    AssurenceComponent,
    AddassurenceComponent,
    VisiteComponent,
    AddvisiteComponent,
    VignetteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    CommonModule,    QRCodeModule,

    BrowserAnimationsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    if (annyang) {
      annyang.debug();
    }
  }
 }
