import { Outlet } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import Notification from "../Notification";

const NotificationLayer = () => {
	const { notifications, deleteNotification } = useNotification();

	console.log(notifications);
	return (
		<>
			<Outlet />

			<div className="fixed bottom-0 right-0 w-full sm:w-96 overflow-scroll flex flex-col justify-end items-end p-4 gap-4">
				{notifications.map((notification) => {
					return (
						<Notification
							id={notification.id}
							title={notification.title}
							text={notification.text}
							type={notification.type}
							handleDeleteNotificationClick={() => {
								deleteNotification(notification.id!);
							}}
						/>
					);
				})}
			</div>
		</>
	);
};

export default NotificationLayer;
