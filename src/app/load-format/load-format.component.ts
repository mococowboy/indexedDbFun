import {Component, OnInit} from '@angular/core';
import {DexieService} from '../dexie.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-load-format',
  templateUrl: './load-format.component.html',
  styleUrls: ['./load-format.component.css']
})
export class LoadFormatComponent {

  ds: DexieService;
  fb: FormBuilder;
  tokenGroup: FormGroup;
  tokenArray: FormArray;

  constructor(ds: DexieService, fb: FormBuilder) {
    this.ds = ds;
    this.fb = fb;
    this.tokenGroup = this.fb.group({
      tokenName: [''],
      tokenStart: [''],
      tokenEnd: ['']
    });

    this.tokenArray = this.fb.array([
      new FormControl('A'),
      new FormControl('B')
    ]);
  }

  public addControlToArray(): void {
    // find max value in array to increment by
    const maxValue: string = this.tokenArray.controls.map(c => c.value).reduce((a, b) => a > b ? a : b);
    this.tokenArray.push(new FormControl(String.fromCharCode(maxValue.charCodeAt(0) + 1)));
  }

}
