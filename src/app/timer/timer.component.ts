import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TimeService} from "../time.service";
import {BackgroundService} from "../background.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'timer',
	template: `
		<div class="content">
			<h1 class="content__title">
				<ng-container *ngIf="remainedDays && timeRemainder">
					{{remainedDays}} DAYS {{timeRemainder}} <br>
					TILL {{countdownDate | date : "MM/dd/yyyy"}}
				</ng-container>
				<ng-container *ngIf="remainedDays === 0">
					THE DAY HAS COME!
				</ng-container>
			</h1>
		</div>
	`
})
export class TimerComponent implements OnInit, AfterViewInit {

	public countdownDate: Date;

	public remainedDays: number;

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

	public ngAfterViewInit() {
	}

	private resolveCountdownDate(): void {
		const paramMap = this.route.snapshot.paramMap;
		this.countdownDate = this.timeService.getDate(paramMap.get("day"), paramMap.get("month"), paramMap.get("year"));
	}

	private recalculateRemainedTime(): void {
		const remainedTime = this.timeService.getRemainedTime(this.countdownDate);
		this.remainedDays = remainedTime.days;
		this.timeRemainder = remainedTime.formattedTimeRemainder;
	}
}
