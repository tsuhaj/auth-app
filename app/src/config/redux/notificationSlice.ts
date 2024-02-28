import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationType } from "../types";

interface NotificationSlice {
	notifications: NotificationType[];
}

const initialNotificationState: NotificationSlice = {
	notifications: [],
};

export const notificationSlice = createSlice({
	name: "notification",
	initialState: initialNotificationState,
	reducers: {
		addNotification: (state, action: PayloadAction<NotificationType>) => {
			state.notifications.push(action.payload);
		},
		removeNotification: (state, action: PayloadAction<string>) => {
			state.notifications = state.notifications.filter((notification) => {
				return notification.id != action.payload;
			});
		},
	},
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
