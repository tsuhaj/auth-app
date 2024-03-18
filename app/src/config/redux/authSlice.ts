import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

export interface AuthSlice {
	token: string | null;
	user: IUser | null;
}

const initialAuthState: AuthSlice = {
	token: null,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login: (state, action: PayloadAction<AuthSlice>) => {
			state = action.payload;
		},
		logout: (state) => {
			state.token = null;
			state.user = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
