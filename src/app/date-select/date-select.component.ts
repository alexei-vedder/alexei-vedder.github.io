import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'date-select',
	template: `
		<p>
			Select the date you want to count to <strong>TODO date-picker</strong>
		</p>
	`,
	styles: []
})
export class DateSelectComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
