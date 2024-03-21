import { FC, useEffect } from "react";
import useAppTheme from "../hooks/useAppTheme";
import { THEME } from "../hooks/useAppTheme";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/shadcnui/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/shadcnui/ui/dropdown-menu";

const DarkModeToggle: FC = () => {
	const { theme, changeAppTheme } = useAppTheme();

	const switchTheme = (newTheme: THEME) => {
		changeAppTheme(newTheme);
	};

	useEffect(() => {
		console.log("theme changed", theme);
	}, [theme]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => switchTheme(THEME.LIGHT)}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => switchTheme(THEME.DARK)}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => switchTheme(THEME.SYSTEM)}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DarkModeToggle;
