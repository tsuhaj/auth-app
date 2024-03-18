import { addNotification, removeNotification } from "../config/redux/notificationSlice";
import { useAppDispatch, useAppSelector } from "../config/redux/store";
import { NotificationSeverity, NotificationType } from "../config/types";

const getDefaultNotificationTitle = (severity: NotificationSeverity) => {
	switch (severity) {
		case NotificationSeverity.SUCCESS:
			return "Success";
		case NotificationSeverity.ERROR:
			return "Error";
		case NotificationSeverity.INFO:
			return "Info";
	}
};

const useNotification = () => {
	const notifications = useAppSelector((state) => state.notification.notifications);
	const dispatch = useAppDispatch();

	const createNotification = (notificationOptions: NotificationType) => {
		const opts = notificationOptions;
		if (!opts.id) opts.id = Date.now().toString();
		if (!opts.title) opts.title = getDefaultNotificationTitle(opts.type);

		dispatch(addNotification(opts));
	};

	const deleteNotification = (id: string) => {
		dispatch(removeNotification(id));
	};

	return {
		notifications,
		createNotification,
		deleteNotification,
	};
};

export default useNotification;
