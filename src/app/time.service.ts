import {Injectable} from '@angular/core';
import {addMonths, differenceInDays, format, getQuarter, intervalToDuration, isToday} from "date-fns";

@Injectable()
export class TimeService {

	constructor() {
	}

	public getCurrentSeason(): number {
		return getQuarter(addMonths(Date.now(), 1));
	}

	public getDate(day: string, month: string, year: string): Date {
		return new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day));
	}

	public isToday(date: Date): boolean {
		return isToday(date);
	}

	public getRemainedTime(countdownDate: Date): { days: number, formattedTimeRemainder: string } {
		const days = differenceInDays(countdownDate, Date.now());

		const {hours, minutes, seconds} = intervalToDuration({
			start: Date.now(),
			end: countdownDate
		});

		return {
			days,
			formattedTimeRemainder: format(new Date(0, 0, 0, hours, minutes, seconds), "HH:mm:ss")
		}
	}
}
