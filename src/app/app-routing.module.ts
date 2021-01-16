import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimerComponent} from "./timer/timer.component";
import {DateSelectComponent} from "./date-select/date-select.component";


const routes: Routes = [
	{path: "", component: DateSelectComponent},
	{path: ":month/:day/:year", component: TimerComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
