import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sample-app',
  templateUrl: './sample.component.html',
  styleUrls: [],
})
export class SampleComponent {
  @Output() submitAction = new EventEmitter();
}
