import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DexieService {

  db: StateDatabase;
  emptyState: State = {fips: '00', name: 'None'};

  constructor() {
    this.db = new StateDatabase();
  }

  get states(): Observable<State[]> {
    return from(this.db.state.toArray());
  }

  bulkPut(stateFileArray: State[]): void {
    this.db.state.bulkPut(stateFileArray);
  }

  getFirst(): Observable<State> {
    // @ts-ignore
    return from(this.db.state.orderBy('fips').first());
  }

  getLast(): Observable<State> {
    // @ts-ignore
    return from(this.db.state.orderBy('fips').last());
  }

  getNext(fips: string): Observable<any> {
    return from(this.db.state.where('fips').above(fips).first());
  }

  getPrev(fips: string): Observable<any> {
    return from(this.db.state.where('fips').below(fips).reverse().first());
  }

  clearStates(): void {
    this.db.state.clear();
  }

}

export interface State {
  fips: string;
  name: string;
}

export class StateDatabase extends Dexie {
  state: Dexie.Table<State, string>;

  constructor() {
    super('db');
    this.version(1).stores({
      state: '&fips,name'
    });

    this.state = this.table('state');
  }

}
