import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NvD3Module } from 'ng2-nvd3';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './warning-alert/success-alert/success-alert.component';
import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [    
    AppComponent,    
    WarningAlertComponent,
    SuccessAlertComponent,
    GridComponent,
    ChartComponent
  ],
  imports: [
    FormsModule,
    NvD3Module,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
