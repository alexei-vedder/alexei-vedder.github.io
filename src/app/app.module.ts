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
import {MatButtonModule} from "@angular/material/button";
import {BackgroundDialogComponent} from './background-dialog/background-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";


@NgModule({
	declarations: [
		AppComponent,
		TimerComponent,
		DateSelectComponent,
		DynamicBackgroundDirective,
		BackgroundDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatButtonModule,
		MatDialogModule,
		FormsModule
	],
	providers: [
		TimeService,
		{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
