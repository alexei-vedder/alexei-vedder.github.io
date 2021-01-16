import {Component} from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<main dynamicBackground class="container">
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent {
	// TODO is it possible not to rerender app component when routing?
	//  If it is then check working of onChanges in dynamic-bg.directive
}
