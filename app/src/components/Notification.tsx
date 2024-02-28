import { FC, useEffect } from "react";
import { NotificationSeverity, NotificationType } from "../config/types";
import { IoClose } from "react-icons/io5";

interface NotificationProps extends NotificationType {
	handleDeleteNotificationClick: () => void;
}

const Notification: FC<NotificationProps> = ({ id, title, text, type, handleDeleteNotificationClick }) => {
	useEffect(() => {
		setTimeout(() => {
			handleDeleteNotificationClick();
		}, 5000);
	}, []);

	const generateNotificationStyleFromType = () => {
		if (type == NotificationSeverity.INFO) return "bg-neutral-700";
		else return "bg-red-900";
	};

	return (
		<div className={`${generateNotificationStyleFromType()} flex flex-col rounded-md text-gray-400 p-3 gap-2 w-full`}>
			<div className="flex flex-row justify-between">
				<div className="font-bold">{title}</div>
				<button className="hover:cursor-pointer bg-neutral-600 p-1 rounded-md" onClick={handleDeleteNotificationClick}>
					<IoClose />
				</button>
			</div>

			<div className="text-sm">{text}</div>
		</div>
	);
};

export default Notification;
