import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
	selector: 'background-dialog',
	template: `
		<h1>Enter your background url</h1>
		<div mat-dialog-content>
			<mat-form-field>
				<mat-label>URL</mat-label>
				<input matInput [(ngModel)]="enteredUrl">
			</mat-form-field>
		</div>
		<div mat-dialog-actions>
			<button *ngIf="isCustomBackgroundApplied" mat-button (click)="reset()">Reset</button>
			<button mat-button (click)="cancel()">Cancel</button>
			<button mat-button (click)="apply()">Apply</button>
		</div>
	`,
	styles: []
})
export class BackgroundDialogComponent implements OnInit {

	enteredUrl: string;
	isCustomBackgroundApplied: boolean;

	constructor(public dialogRef: MatDialogRef<BackgroundDialogComponent>) {
	}

	ngOnInit(): void {
		this.isCustomBackgroundApplied = !!localStorage.getItem("backgroundUrl");
	}

	cancel() {
		this.dialogRef.close();
	}

	apply() {
		if (this.enteredUrl) {
			localStorage.setItem("backgroundUrl", this.enteredUrl);
			this.dialogRef.close();
			this.isCustomBackgroundApplied = true;
		}
	}

	reset() {
		localStorage.removeItem("backgroundUrl");
		this.isCustomBackgroundApplied = false;
	}
}
