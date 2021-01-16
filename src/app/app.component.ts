import {Component} from '@angular/core';

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
}
