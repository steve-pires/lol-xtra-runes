import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RiotApiService } from './riot-api.service';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // keep last
    BrowserModule
  ],
  providers: [
    RiotApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
