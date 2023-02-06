import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { AddpenggunaComponent } from './addpengguna/addpengguna.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddhakaksesComponent } from './addhakakses/addhakakses.component';
import { HakaksesComponent } from './hakakses/hakakses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddpenggunaComponent,
    AddhakaksesComponent,
    HakaksesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
