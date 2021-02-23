import { Component } from '@angular/core';
import {DexieService} from '../dexie.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent {
  ds: DexieService;

  constructor(ds: DexieService) {
    this.ds = ds;
  }

  form: FormGroup = new FormGroup({
    delimiter: new FormControl('csv'),
    export: new FormControl()
  });

}
