import {Injectable} from '@angular/core';
import {TimeService} from "./time.service";
import {Images, IMAGES_PATH} from "../assets/images-data";


@Injectable()
export class BackgroundService {

	constructor(private timeService: TimeService) {
	}

	public getBackgroundImageStyleValue(): string {
		const countdownDate: Date = this.getCountdownDateFromUrlParams();
		const customBackground = localStorage.getItem("backgroundUrl");
		let imageName: string;

		if (countdownDate && this.timeService.isToday(countdownDate)) {
			imageName = Images.THE_DAY_HAS_COME;
		} else if (customBackground) {
			return `url(${customBackground})`
		} else {
			const currentSeason: number = this.timeService.getCurrentSeason();
			switch (currentSeason) {
				case 1:
					imageName = Images.WINTER;
					break;
				case 2:
					imageName = Images.SPRING;
					break;
				case 3:
					imageName = Images.SUMMER;
					break;
				case 4:
					imageName = Images.FALL;
					break;
			}
		}

		return `url(${IMAGES_PATH}${imageName})`;
	}

	private getCountdownDateFromUrlParams() {
		// TODO workaround, because ActivatedRoute somehow returns an empty array of params
		const route = window.location.pathname;
		const params = route.slice(1).split("/");
		return this.timeService.getDate(params[2], params[1], params[3]);
	}
}
