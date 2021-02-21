import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadComponent} from "./load/load.component";
import {RecordViewComponent} from "./record-view/record-view.component";
import {LoadFormatComponent} from "./load-format/load-format.component";

const routes: Routes = [
  {path: 'load', component: LoadComponent},
  {path: 'record-view', component: RecordViewComponent},
  {path: 'load-format', component: LoadFormatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
