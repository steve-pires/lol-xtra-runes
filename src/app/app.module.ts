import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RiotApiService } from './riot-api.service';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatListModule, MatCardModule,
  MatToolbar, MatToolbarModule, MatStepperModule, MatTooltipModule, MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // keep last
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [
    RiotApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
