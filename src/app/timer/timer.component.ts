import {Component, OnInit} from '@angular/core';
import {TimeService} from "../time.service";
import {BackgroundService} from "../background.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'timer',
	template: `
		<div class="content" *ngIf="timeRemainder">
			<h1 class="content__title">
				<ng-container *ngIf="!isCountdownDateToday">
					{{daysRemainder}} {{daysRemainder === 1 ? "DAY" : "DAYS"}} {{timeRemainder}} <br>
					TILL {{countdownDate | date : "MM/dd/yyyy"}}
				</ng-container>
				<ng-container *ngIf="isCountdownDateToday">
					THE DAY HAS COME!
				</ng-container>
			</h1>
		</div>
	`
})
export class TimerComponent implements OnInit {

	public countdownDate: Date;

	public isCountdownDateToday: boolean;

	public daysRemainder: number;

	public timeRemainder: string;

	constructor(private timeService: TimeService,
				private backgroundService: BackgroundService,
				private route: ActivatedRoute) {
	}

	public ngOnInit() {
		this.resolveCountdownDate();
		setInterval(() => {
			this.recalculateRemainedTime();
		}, 1000);
	}

	private resolveCountdownDate(): void {
		const paramMap = this.route.snapshot.paramMap;
		this.countdownDate = this.timeService.getDate(paramMap.get("day"), paramMap.get("month"), paramMap.get("year"));
		this.isCountdownDateToday = this.timeService.isToday(this.countdownDate);
	}

	private recalculateRemainedTime(): void {
		const remainedTime = this.timeService.getRemainedTime(this.countdownDate);
		this.daysRemainder = remainedTime.days;
		this.timeRemainder = remainedTime.formattedTimeRemainder;
	}
}
