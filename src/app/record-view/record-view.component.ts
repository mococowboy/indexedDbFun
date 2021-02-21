import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DexieService, State} from "../dexie.service";

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

  first(): void {

  }

  ngOnInit(): void {
    this.ds.getStates().subscribe(s => this.states = s);
  }

}
