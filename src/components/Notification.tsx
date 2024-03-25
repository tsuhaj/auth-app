import { FC, useEffect } from "react";
import { NotificationSeverity, NotificationType } from "../config/types";
import { ToastClose } from "./shadcnui/ui/toast";

interface NotificationProps extends NotificationType {
	handleDeleteNotificationClick: () => void;
}

const Notification: FC<NotificationProps> = ({ title, text, type, handleDeleteNotificationClick }) => {
	useEffect(() => {
		setTimeout(() => {
			handleDeleteNotificationClick();
		}, 5000);
	}, []);

	const generateNotificationStyleFromType = () => {
		switch (type) {
			case NotificationSeverity.DEFAULT:
				return "border bg-background text-foreground";
			case NotificationSeverity.DESTRUCTIVE:
				return "destructive group border-destructive bg-destructive text-destructive-foreground";
			default:
				return "";
		}
	};

	return (
		<div
			className={`group pointer-events-auto relative flex flex-col gap-2 w-80 items-center justify-between overflow-hidden rounded-md border p-5 shadow-lg ${generateNotificationStyleFromType()}`}
		>
			<div className="grid gap-1">
				<div className="text-sm font-medium">{title}</div>
				<div className="text-sm opacity-90">{text}</div>
			</div>

			<ToastClose onClick={handleDeleteNotificationClick} />
		</div>
	);
};

export default Notification;
