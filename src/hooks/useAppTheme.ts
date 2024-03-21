import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../config/redux/store";
import { changeTheme } from "../config/redux/appThemeSlice";

export enum THEME {
	DARK = "dark",
	LIGHT = "light",
	SYSTEM = "system",
}
export const LOCAL_STORAGE_THEME_KEY = "app-theme";

const useAppTheme = () => {
	const appTheme = useAppSelector((state) => state.appTheme.theme);
	const dispatch = useAppDispatch();

	const changeAppTheme = (newTheme: THEME) => {
		dispatch(changeTheme(newTheme));
	};

	useEffect(() => {
		window.document.documentElement.classList.remove(THEME.DARK, THEME.LIGHT);

		if (appTheme == THEME.SYSTEM) {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEME.DARK : THEME.LIGHT;
			window.document.documentElement.classList.add(systemTheme);
		} else {
			window.document.documentElement.classList.add(appTheme);
		}

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, appTheme);
	}, [appTheme]);

	return {
		theme: appTheme,
		changeAppTheme,
	};
};

export default useAppTheme;
