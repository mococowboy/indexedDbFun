import {Component} from '@angular/core';
import {DexieService, State} from '../dexie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-load-format',
  templateUrl: './load-format.component.html',
  styleUrls: ['./load-format.component.css']
})
export class LoadFormatComponent {

  states: Observable<State[]>;
  st: State[] = [];
  ds: DexieService;

  constructor(ds: DexieService) {
    this.ds = ds;
    this.states = this.ds.getStates();
  }

  getStates(): void {
    this.states.subscribe(s => this.st = s);
  }
}
