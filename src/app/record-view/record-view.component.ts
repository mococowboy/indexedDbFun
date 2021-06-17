import {Component, OnDestroy} from '@angular/core';
import {DexieService, State} from '../dexie.service';
import {BehaviorSubject} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnDestroy {

  ds: DexieService;

  constructor(ds: DexieService) {
    this.ds = ds;
  }
  // use a subject as the source for the currently displayed value in the view.
  currentState: BehaviorSubject<State> = new BehaviorSubject<State>({fips: '00', name: 'None'});

  first(): void {
    this.ds.getFirst().pipe(defaultIfEmpty({fips: '00', name: 'None'})).subscribe(x => this.currentState.next(x));
  }

  last(): void {
    this.ds.getLast().subscribe(x => this.currentState.next(x));
  }

  prev(): void {
    // uses filter to ignore falsy returns from Dexie which means the failure stays the same.
    this.ds.getPrev(this.currentState.value.fips).pipe(filter(x => x)).subscribe(x => this.currentState.next(x));
  }

  next(): void {
    this.ds.getNext(this.currentState.value.fips).pipe(filter(x => x)).subscribe(x => this.currentState.next(x));
  }

  ngOnDestroy(): void {
    this.currentState.unsubscribe();
  }

}
