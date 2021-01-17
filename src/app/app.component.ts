import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BackgroundDialogComponent} from "./background-dialog/background-dialog.component";

@Component({
	selector: 'app',
	template: `
		<main dynamicBackground class="container">
			<header [routerLink]="'/'" class="header">
				<p class="title">Countdown Date Timer</p>
				<button class="custom-background-dialog-button"
						mat-flat-button
						(click)="openDialog()">
					Custom background
				</button>
			</header>
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent implements OnInit {

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

	openDialog(): void {
		const dialogRef = this.dialog.open(BackgroundDialogComponent);
		dialogRef.afterClosed()
			.subscribe(result => {
			});
	}

}
