import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_THEME_KEY, THEME } from "../../hooks/useAppTheme";

interface AppThemeSlice {
	theme: THEME;
}

const initialAppThemeState: AppThemeSlice = {
	theme: (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.SYSTEM,
};

export const appThemeSlice = createSlice({
	name: "appTheme",
	initialState: initialAppThemeState,
	reducers: {
		changeTheme: (state, action: PayloadAction<THEME>) => {
			state.theme = action.payload;
		},
	},
});

export const { changeTheme } = appThemeSlice.actions;

export default appThemeSlice.reducer;
