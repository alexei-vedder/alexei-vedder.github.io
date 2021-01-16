import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
import {BackgroundService} from "./background.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Directive({
	selector: '[dynamicBackground]',
	providers: [BackgroundService]
})
export class DynamicBackgroundDirective implements OnInit {

	@HostBinding("class")
	private readonly cssClass = "background";

	constructor(private element: ElementRef,
				private backgroundService: BackgroundService,
				private renderer: Renderer2,
				private router: Router) {
	}

	public ngOnInit(): void {
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {
				this.resolveBackgroundImage();
			});
	}

	private resolveBackgroundImage(): void {
		const backgroundImageStyleValue = this.backgroundService.getBackgroundImageStyleValue()
		if (this.element.nativeElement.backgroundImage !== backgroundImageStyleValue) {
			console.log("CHANGED", this.element.nativeElement.backgroundImage, backgroundImageStyleValue);
			this.renderer.setStyle(
				this.element.nativeElement,
				"background-image",
				backgroundImageStyleValue
			);
		}
	}
}
