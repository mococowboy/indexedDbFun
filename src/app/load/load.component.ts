import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DexieService} from '../dexie.service';


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnDestroy {

  @ViewChild('confirm')
  private dialogRef?: ElementRef;
  loadWorker: Worker;
  fileForm: FormControl;
  ds: DexieService;

  constructor(ds: DexieService) {
    this.ds = ds;
    this.loadWorker = new Worker('./../load.worker', { type: 'module'});
    this.fileForm = new FormControl();
  }

  ngOnDestroy(): void {
    this.loadWorker.terminate();
  }

  showDialog(): void {
    this.dialogRef?.nativeElement.showModal();
  }

  clearDatabase(): void {
    this.ds.clearStates();
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef?.nativeElement.close('close');
  }

  changeListener(event: any): void {
    const file = event.target.files[0];
    this.loadWorker.postMessage(file);
    this.loadWorker.onmessage = (data) => {
      this.ds.bulkPut(data.data);
    };
  }

}
