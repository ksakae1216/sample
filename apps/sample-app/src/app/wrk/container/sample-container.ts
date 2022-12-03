import { Component } from '@angular/core';

@Component({
  selector: 'sample-container',
  template: `
    <sample-app
      (submitAction)="submitAction()"
    ></sample-app>
  `,
  styles: [],
})
export class SampleContainerComponent {
  submitAction(): void {
    console.log('call SampleContainerComponent.submitAction');
  }
}
