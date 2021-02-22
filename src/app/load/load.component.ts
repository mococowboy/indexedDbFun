import {Component, OnDestroy} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DexieService} from "../dexie.service";


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnDestroy {

  loadWorker: Worker;
  fileForm: FormControl;
  ds: DexieService;

  constructor(ds: DexieService) {
    this.ds = ds;
    this.loadWorker = new Worker('./../load.worker', { type: 'module'})
    this.fileForm = new FormControl();
  }

  ngOnDestroy(): void {
    this.loadWorker.terminate();
  }

  changeListener(event: any): void {
    let file = event.target.files[0];
    this.loadWorker.postMessage(file);
    this.loadWorker.onmessage = (data) => {
      console.log(data)
      this.ds.bulkPut(data.data);
    }
  }

}
