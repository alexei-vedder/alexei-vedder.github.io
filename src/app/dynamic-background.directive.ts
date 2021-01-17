import {Directive, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {BackgroundService} from "./background.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter, takeUntil} from "rxjs/operators";
import {interval, merge, Subject} from "rxjs";

@Directive({
	selector: '[dynamicBackground]',
	providers: [BackgroundService]
})
export class DynamicBackgroundDirective implements OnInit, OnDestroy {

	@HostBinding("class")
	private readonly cssClass = "background";

	private unsubscribe: Subject<void> = new Subject<void>();

	constructor(private element: ElementRef,
				private backgroundService: BackgroundService,
				private renderer: Renderer2,
				private router: Router) {
	}

	public ngOnInit(): void {
		merge(
			interval(1000),
			this.router.events.pipe(filter(event => event instanceof NavigationEnd))
		).pipe(takeUntil(this.unsubscribe))
			.subscribe(() => {
				this.resolveBackgroundImage();
			});
	}

	public ngOnDestroy(): void {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	private resolveBackgroundImage(): void {
		const backgroundImageStyleValue = this.backgroundService.getBackgroundImageStyleValue();
		if (this.element.nativeElement.backgroundImage !== backgroundImageStyleValue) {
			this.renderer.setStyle(
				this.element.nativeElement,
				"background-image",
				backgroundImageStyleValue
			);
		}
	}
}
