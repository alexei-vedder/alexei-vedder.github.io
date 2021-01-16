import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimeService} from "./time.service";
import {TimerComponent} from './timer/timer.component';
import {DateSelectComponent} from './date-select/date-select.component';
import {DynamicBackgroundDirective} from './dynamic-background.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
	declarations: [
		AppComponent,
		TimerComponent,
		DateSelectComponent,
		DynamicBackgroundDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule
	],
	providers: [
		TimeService,
		{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
