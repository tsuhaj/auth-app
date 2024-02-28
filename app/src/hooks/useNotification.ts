import { addNotification, removeNotification } from "../config/redux/notificationSlice";
import { useAppDispatch, useAppSelector } from "../config/redux/store";
import { NotificationType } from "../config/types";

const useNotification = () => {
	const notifications = useAppSelector((state) => state.notification.notifications);
	const dispatch = useAppDispatch();

	const createNotification = (notificationOptions: NotificationType) => {
		dispatch(addNotification({ ...notificationOptions, id: Date.now().toString() }));
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
