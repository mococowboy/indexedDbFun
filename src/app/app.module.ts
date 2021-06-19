import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadComponent } from './load/load.component';
import { RecordViewComponent } from './record-view/record-view.component';
import { LoadFormatComponent } from './load-format/load-format.component';
import { ExportComponent } from './export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    RecordViewComponent,
    LoadFormatComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
