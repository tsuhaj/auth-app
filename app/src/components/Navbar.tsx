import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Menu from "../assets/SvgIcons/Menu";
import { BLACK, WHITE } from "../config/colors";
import useAppTheme, { THEME } from "../hooks/useAppTheme";
import useWindowSize from "../hooks/useWindowSize";
import Close from "../assets/SvgIcons/Close";
import Logo from "../assets/SvgIcons/Logo";

interface NavigationItem {
	path: string;
	label: string;
}

const navigationItems: NavigationItem[] = [
	{
		path: "/",
		label: "Homepage",
	},
	{ path: "/settings", label: "Settings" },
	{ path: "/contact", label: "Contact" },
	{ path: "/about", label: "About" },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const { width, height, isMobile } = useWindowSize();
	const { theme } = useAppTheme();

	const navigate = useNavigate();

	console.log(width, height);

	const toggleMenu = () => {
		setMenuOpen((oldVal) => !oldVal);
	};

	useEffect(() => {
		if (!isMobile && menuOpen) setMenuOpen(false);
	}, [isMobile]);

	const redirectToLogin = () => {
		navigate("/login");
	};

	const redirectToRegister = () => {
		navigate("/register");
	};

	return (
		<header className="border-b-gray-800 border-opacity-20 dark:border-opacity-100 border-b py-2">
			<nav className="max-w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
				<div className="flex flex-row justify-between items-center gap-6 w-full md:w-auto">
					<Logo className="w-44 h-auto" color={theme == THEME.DARK ? WHITE : BLACK} />

					{menuOpen ? (
						<Close
							color={theme == THEME.DARK ? WHITE : BLACK}
							className="hover:cursor-pointer inline-block md:hidden"
							onClick={toggleMenu}
						/>
					) : (
						<Menu
							color={theme == THEME.DARK ? WHITE : BLACK}
							className="hover:cursor-pointer inline-block md:hidden"
							onClick={toggleMenu}
						/>
					)}

					<div className={`hidden md:block`}>
						<ul className="text-gray-500 text-sm flex flex-col md:flex-row md:gap-5">
							{navigationItems.map((item) => {
								return (
									<li className=" hover:text-gray-300">
										<NavLink
											className={({ isActive, isPending }) =>
												isPending ? "pending" : isActive ? "text-black dark:text-white" : ""
											}
											to={item.path}
										>
											{item.label}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className="hidden md:block">
					<ButtonGroup>
						<DarkModeToggle />
						<Button variant="primary" label="Login" onClick={redirectToLogin} />
						<Button variant="secondary" label="Register" onClick={redirectToRegister} />
					</ButtonGroup>
				</div>

				{menuOpen && (
					<>
						<div className="fixed top-[45px] left-0 h-full w-full bg-white dark:bg-black">
							<ul className="text-gray-500 flex flex-col gap-3 p-6">
								{navigationItems.map((item) => {
									return (
										<li className="hover:text-gray-300">
											<NavLink
												className={({ isActive, isPending }) =>
													isPending ? "pending" : isActive ? "text-black dark:text-white" : ""
												}
												to={item.path}
											>
												{item.label}
											</NavLink>
										</li>
									);
								})}

								<div className="flex flex-col justify-start items-start gap-3">
									<DarkModeToggle />
									<Button variant="primary" label="Login" onClick={redirectToLogin} />
									<Button variant="secondary" label="Register" onClick={redirectToRegister} />
								</div>
							</ul>
						</div>
					</>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
