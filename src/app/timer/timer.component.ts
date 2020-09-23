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

	@ViewChild("mainContainer")
	private mainContainer: ElementRef;

	constructor(private timeService: TimeService,
				private backgroundService: BackgroundService,
				private route: ActivatedRoute,
				private renderer: Renderer2) {
	}

	public ngOnInit() {
		this.resolveCountdownDate();
	}

	public ngAfterViewInit() {
		this.resolveBackground();
	}

	private resolveCountdownDate() {
		const paramMap = this.route.snapshot.paramMap;
		this.countdownDate = this.timeService.getDate(paramMap.get("day"), paramMap.get("month"), paramMap.get("year"));
	}

	private resolveBackground() {
		const backgroundImageValue = "url(" + this.backgroundService.getBackgroundUrl(this.countdownDate) + ")";
		this.renderer.setStyle(this.mainContainer.nativeElement, "background-image", backgroundImageValue);
	}
}
