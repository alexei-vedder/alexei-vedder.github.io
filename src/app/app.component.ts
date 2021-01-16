import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app',
	template: `
		<header [routerLink]="'/'" class="header title">Countdown Date Timer</header>
		<main dynamicBackground class="container">
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent {
	constructor(private router: Router) {
		let path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			this.router.navigate([path]);
		}
	}
}
