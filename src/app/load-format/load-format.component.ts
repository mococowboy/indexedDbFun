import {Component} from '@angular/core';
import {DexieService} from '../dexie.service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-load-format',
  templateUrl: './load-format.component.html',
  styleUrls: ['./load-format.component.css']
})
export class LoadFormatComponent {

  ds: DexieService;
  tokenForm: FormGroup;

  constructor(ds: DexieService) {
    this.ds = ds;

    this.tokenForm = new FormGroup({
      formatName: new FormControl(''),
      tokenArray: new FormArray([
        new FormGroup({
          tokenName: new FormControl(''),
          tokenStart: new FormControl(''),
          tokenEnd: new FormControl('')
        })
      ])
    });
  }

  get formatName(): FormControl {
    return this.tokenForm.get('formatName') as FormControl;
  }

  get tokenArray(): FormArray {
    return this.tokenForm.get('tokenArray') as FormArray;
  }

  addFormGroupToArray(): void {
    this.tokenArray.push(        new FormGroup({
      tokenName: new FormControl(''),
      tokenStart: new FormControl(''),
      tokenEnd: new FormControl('')
    }));
  }

  removeFormGroup(): void {
    this.tokenArray.removeAt(this.tokenArray.length - 1);
  }

}
