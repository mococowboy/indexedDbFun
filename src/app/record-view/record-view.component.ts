import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DexieService, State} from '../dexie.service';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnInit {

  ds: DexieService;

  constructor(ds: DexieService) {
    this.ds = ds;
  }

  userName = new FormControl();
  states: State[] = [];
  currentState: State | any;

  first(): void {
    this.ds.getFirst().subscribe(n => {
      this.currentState = n;
    });
  }

  last(): void {
    this.ds.getLast().subscribe(n => {
      this.currentState = n;
    });
  }

  prev(): void {
    this.ds.getPrev(this.currentState?.fips).subscribe(n => {
      if (n) {
        this.currentState = n;
      }
    });
  }

  next(): void {
    this.ds.getNext(this.currentState?.fips).subscribe(n => {
      if (n) {
        this.currentState = n;
      }
    });
  }

  ngOnInit(): void {
    this.ds.getStates().subscribe(s => this.states = s);
  }

}
