import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DexieService {


  db: StateDatabase;
  firstObservable: Observable<State>;

  constructor() {
    this.db = new StateDatabase();
    // @ts-ignore
    this.firstObservable = from(this.db.state.toCollection().first());
  }

  getStates(): Observable<State[]> {
    return from(this.db.state.toArray());
  }

  bulkPut(stateFileArray: State[]) {
    this.db.state.bulkPut(stateFileArray);
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

    // this.state.bulkPut([
    //   {fips: '01', name: 'Alabama'},
    //   {fips: '02', name: 'Alaska'},
    //   {fips: '04', name: 'Arizona'},
    //   {fips: '05', name: 'Arkansas'},
    //   {fips: '06', name: 'California'},
    //   {fips: '08', name: 'Colorado'},
    //   {fips: '09', name: 'Connecticut'},
    //   {fips: '10', name: 'Delaware'},
    //   {fips: '11', name: 'District of Columbia'},
    //   {fips: '12', name: 'Florida'},
    //   {fips: '13', name: 'Georgia'},
    //   {fips: '15', name: 'Hawaii'},
    //   {fips: '16', name: 'Idaho'},
    //   {fips: '17', name: 'Illinois'}
    // ])
  }

}
