import {AfterViewInit, Component} from '@angular/core';

@Component({
	selector: 'date-select',
	template: `
		<main class="container">
			<div class="content">
				<p class="content__title">
					Select the date you want to count to
				</p>
			</div>
			<mat-form-field class="example-full-width" appearance="fill">
				<mat-label>Choose a date</mat-label>
				<input matInput [matDatepicker]="picker">
				<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
				<mat-datepicker touchUi #picker></mat-datepicker>
			</mat-form-field>
		</main>
	`,
	styles: []
})
export class DateSelectComponent implements AfterViewInit {

	// TODO datepicker

	constructor() {
	}

	ngAfterViewInit(): void {
	}
}
