import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public AppComponent() {

  }

  title = 'localDemo';
  numbers = [1, 2, 3, 4, 5, 6];
  userName = new FormControl("Michael");

}
