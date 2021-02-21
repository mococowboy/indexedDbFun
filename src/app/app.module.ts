import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadComponent } from './load/load.component';
import { RecordViewComponent } from './record-view/record-view.component';
import { LoadFormatComponent } from './load-format/load-format.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    RecordViewComponent,
    LoadFormatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
