import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'date-select',
	template: `
		<div class="container">
			<div class="content">
				<p class="content__title">
					Select the date you want to count to
				</p>
			</div>
			<div class="date-picker">
				<mat-form-field class="example-full-width" appearance="fill">
					<mat-label>Choose a date</mat-label>
					<input (dateChange)="redirectTo($event.value)" matInput [matDatepicker]="picker">
					<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
					<mat-datepicker touchUi #picker></mat-datepicker>
				</mat-form-field>
			</div>
		</div>
	`,
	styles: []
})
export class DateSelectComponent {

	constructor(private router: Router) {
	}

	redirectTo(date) {
		setTimeout(() => {
			this.router.navigate([`/${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`])
		});
	}
}
