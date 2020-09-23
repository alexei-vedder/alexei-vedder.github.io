import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimerComponent} from "./timer/timer.component";


const routes: Routes = [
	// TODO {path: "", component: ChooseDateComponent},
	{path: ":day/:month/:year", component: TimerComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
