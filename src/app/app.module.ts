import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimeService} from "./time.service";
import {BackgroundService} from "./background.service";
import {TimerComponent} from './timer/timer.component';
import {DateSelectComponent} from './date-select/date-select.component';

@NgModule({
	declarations: [
		AppComponent,
		TimerComponent,
		DateSelectComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		TimeService,
		BackgroundService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
