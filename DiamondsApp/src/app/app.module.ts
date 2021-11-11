import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import { StatisticsComponent } from './statistics/statistics.component';
import { DiamondsListComponent } from './diamonds-list/diamonds-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from "@angular/material/table";
import { AddDiamondComponent } from './add-diamond/add-diamond.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    DiamondsListComponent,
    AddDiamondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
