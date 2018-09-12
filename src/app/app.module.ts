import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import FusionCharts from 'fusioncharts/core';
import column3d from 'fusioncharts/viz/column3d';
import pie3d from 'fusioncharts/viz/pie3d';
import Column2d from 'fusioncharts/viz/Column2d';
FusionChartsModule.fcRoot(FusionCharts, column3d, pie3d, Column2d);
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTooltipModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FusionChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
