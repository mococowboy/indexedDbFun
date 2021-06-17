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

  exportFile(): void {
    const a: HTMLAnchorElement = document.createElement('a');
    let b: string[] = [];
    this.ds.states.subscribe(c => b = c.map(s => s.fips + ' ' + s.name + '\n'),
                             err => console.error(err),
                          () => {
                         a.href = URL.createObjectURL(new Blob(b, {type: 'text/plain'}));
                         a.setAttribute('download', 'hello.txt');
                         a.click();
                         a.remove();
                       });
  }

}
