import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BackgroundDialogComponent} from "./background-dialog/background-dialog.component";

@Component({
	selector: 'app',
	template: `
		<header #header [routerLink]="'/'" class="header title">Countdown Date Timer
			<button class="custom-background-dialog-button" mat-flat-button (click)="openDialog()">Custom background
			</button>
		</header>
		<main dynamicBackground class="container">
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent implements OnInit, AfterViewInit {

	@ViewChild("header")
	header: ElementRef;

	constructor(private router: Router,
				private dialog: MatDialog) {
	}

	ngOnInit(): void {
		let path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			this.router.navigate([path]);
		}
	}

	ngAfterViewInit(): void {
		this.recalculateHeaderMargin();
	}

	@HostListener("window:resize")
	recalculateHeaderMargin(): void {
		const height = getComputedStyle(this.header.nativeElement).height;
		this.header.nativeElement.style.marginTop = (-Number.parseInt(height)) + "px";
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(BackgroundDialogComponent);
		dialogRef.afterClosed()
			.subscribe(result => {
			});
	}

}
