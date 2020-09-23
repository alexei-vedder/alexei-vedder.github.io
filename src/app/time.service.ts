import {Injectable} from '@angular/core';
import {getQuarter, isToday} from "date-fns";

@Injectable()
export class TimeService {

	constructor() {
	}

	public getCurrentQuarter(): number {
		return getQuarter(new Date());
	}

	public getDate(day: string, month: string, year: string): Date {
		return new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day));
	}

	public isToday(date: Date): boolean {
		return isToday(date);
	}
}
