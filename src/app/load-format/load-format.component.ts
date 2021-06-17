import {Component} from '@angular/core';
import {DexieService} from '../dexie.service';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-load-format',
  templateUrl: './load-format.component.html',
  styleUrls: ['./load-format.component.css']
})
export class LoadFormatComponent {

  ds: DexieService;
  fb: FormBuilder;
  tokenArray: FormArray;

  constructor(ds: DexieService, fb: FormBuilder) {
    this.ds = ds;
    this.fb = fb;

    this.tokenArray = this.fb.array([
      this.fb.group({
        tokenName: [''], tokenStart: [''], tokenEnd: ['']
      })
    ]);
  }

  public removeLastGroupFromArray(): void {
    this.tokenArray.removeAt(this.tokenArray.length - 1);
  }

  public addControlToArray(): void {
    this.tokenArray.push(      this.fb.group({
      tokenName: [''], tokenStart: [''], tokenEnd: ['']
    }));
  }

}
