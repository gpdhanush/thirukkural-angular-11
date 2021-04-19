import { Component, VERSION } from '@angular/core';
import * as details from './detail.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = details;
}
