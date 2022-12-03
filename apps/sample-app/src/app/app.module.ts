import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SampleContainerComponent } from '../app/wrk/container/sample-container';
import { SampleComponent } from './wrk/component/sample.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SampleContainerComponent, SampleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
