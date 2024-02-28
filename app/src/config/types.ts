export interface SvgIconsProps {
	color: string;
	onClick?: () => void;
	className?: string;
}

export interface IUser {
	name: string;
	email: string;
}

export enum NotificationSeverity {
	INFO = "info",
	ERROR = "error",
}

export interface NotificationType {
	id?: string;
	title: string;
	text: string;
	type: NotificationSeverity;
}
