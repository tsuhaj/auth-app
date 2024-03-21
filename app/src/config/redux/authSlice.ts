import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

export const LOCAL_STORAGE_USER_KEY = "firebase-user";

export interface AuthSlice {
	user: IUser | null;
}

const initialAuthState: AuthSlice = {
	user: JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)) || null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
