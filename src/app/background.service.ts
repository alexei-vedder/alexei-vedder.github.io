import {Injectable} from '@angular/core';
import {TimeService} from "./time.service";

@Injectable()
export class BackgroundService {

	private static readonly IMAGE_PATH = "/assets/images/";

	constructor(private timeService: TimeService) {
	}

	public getBackgroundUrl(countdownDate: Date): string {
		if (this.timeService.isToday(countdownDate)) {
			return BackgroundService.IMAGE_PATH + "the-day-has-come.jpg";
		}

		const currentQuarter: number = this.timeService.getCurrentQuarter();
		switch (currentQuarter) {
			case 1: return BackgroundService.IMAGE_PATH + "winter.jpg";
			case 2: return BackgroundService.IMAGE_PATH + "spring.jpg";
			case 3: return BackgroundService.IMAGE_PATH + "summer.jpg";
			case 4: return BackgroundService.IMAGE_PATH + "fall.jpg";
		}
	}
}
