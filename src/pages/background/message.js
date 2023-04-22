import { uuid } from "./tool";
import config from "../../config";

export const sendBasicNotifications = (title, message) => {
	chrome.notifications.getPermissionLevel(level => {
		if (level === 'granted') {
			chrome.notifications.create(uuid(), {
				type: 'basic',
				title,
				message,
				iconUrl: config.iconUrl,
			})
		}
	})
}