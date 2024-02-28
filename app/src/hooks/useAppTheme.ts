import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../config/redux/store";
import { changeTheme } from "../config/redux/appThemeSlice";

export enum THEME {
	DARK = "dark",
	LIGHT = "light",
}
export const LOCAL_STORAGE_THEME_KEY = "theme";

const useAppTheme = () => {
    
	const appTheme = useAppSelector((state) => state.appTheme.theme);
	const dispatch = useAppDispatch();

	const changeAppTheme = (newTheme: THEME) => {
		dispatch(changeTheme(newTheme));
	};

	useEffect(() => {
		if (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) != appTheme) localStorage.setItem(LOCAL_STORAGE_THEME_KEY, appTheme);

		if (appTheme == THEME.DARK && !document.documentElement.classList.contains(THEME.DARK)) document.documentElement.classList.add(THEME.DARK);
		else if (appTheme == THEME.LIGHT) document.documentElement.classList.remove(...document.documentElement.classList);
	}, [appTheme]);

	return {
		theme: appTheme,
		changeAppTheme,
	};
};

export default useAppTheme;
