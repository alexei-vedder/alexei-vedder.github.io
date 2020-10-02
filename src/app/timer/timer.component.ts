import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TimeService} from "../time.service";
import {BackgroundService} from "../background.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'timer',
	templateUrl: "timer.component.html"
})
export class TimerComponent implements OnInit, AfterViewInit {

	public countdownDate: Date;

	public remainedDays: number;

	public timeRemainder: string;


	@ViewChild("mainContainer")
	private mainContainer: ElementRef;

	constructor(private timeService: TimeService,
				private backgroundService: BackgroundService,
				private route: ActivatedRoute,
				private renderer: Renderer2) {
	}

	public ngOnInit() {
		this.resolveCountdownDate();
		window.setInterval(() => {
			this.recalculateRemainedTime();
		}, 1000)
	}

	public ngAfterViewInit() {
		this.resolveBackground();
	}

	private resolveCountdownDate(): void {
		const paramMap = this.route.snapshot.paramMap;
		this.countdownDate = this.timeService.getDate(paramMap.get("day"), paramMap.get("month"), paramMap.get("year"));
	}

	private resolveBackground(): void {
		const backgroundImageValue = `url( ${this.backgroundService.getBackgroundUrl(this.countdownDate)} )`;
		this.renderer.setStyle(this.mainContainer.nativeElement, "background-image", backgroundImageValue);
	}

	private recalculateRemainedTime(): void {
		const remainedTime = this.timeService.getRemainedTime(this.countdownDate);
		this.remainedDays = remainedTime.days;
		this.timeRemainder = remainedTime.formattedTimeRemainder;

		// this.remainedDays = getIntegerDays(remainedTime);
		// this.remainedHours = getIntegerHours(remainedTime - this.remainedDays);
		// this.remainedMinutes = getIntegerMinutes(remainedTime - this.remainedDays - this.remainedHours);
		// this.remainedSeconds = getIntegerSeconds(remainedTime - this.remainedDays - this.remainedHours - this.remainedMinutes);
	}
}
