import { FC, useEffect } from "react";
import useAppTheme from "../hooks/useAppTheme";
import { THEME } from "../hooks/useAppTheme";
import Sun from "../assets/SvgIcons/Sun";
import Moon from "../assets/SvgIcons/Moon";
import { BLACK, WHITE } from "../config/colors";

const DarkModeToggle: FC = () => {
	const { theme, changeAppTheme } = useAppTheme();

	const switchTheme = () => {
		changeAppTheme(theme == THEME.DARK ? THEME.LIGHT : THEME.DARK);
	};

	useEffect(() => {
		console.log("theme changed", theme);
	}, [theme]);

	return <button onClick={switchTheme}>{theme == THEME.DARK ? <Sun color={WHITE} /> : <Moon color={BLACK} />}</button>;
};

export default DarkModeToggle;
