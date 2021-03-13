import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DexieService {

  db: StateDatabase;

  constructor() {
    this.db = new StateDatabase();
  }

  getStates(): Observable<State[]> {
    return from(this.db.state.toArray());
  }

  bulkPut(stateFileArray: State[]): void {
    this.db.state.bulkPut(stateFileArray);
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
