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
		<header className="p-4 bg-white dark:bg-neutral-950">
			<nav className="max-w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
				<div className="flex flex-row justify-between items-center gap-10 w-full md:w-auto">
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
						<ul className=" dark:text-gray-300 font-medium text-sm flex flex-col md:flex-row md:gap-8">
							{navigationItems.map((item) => {
								return (
									<li className=" hover:text-blue-700">
										<NavLink
											className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "font-bold" : "")}
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
						<div className="absolute top-[80px] left-0 h-full w-full bg-white dark:bg-neutral-950 flex justify-center">
							<ul className="text-gray-300 font-medium text-xl flex flex-col items-center gap-5 p-6 mt-14">
								{navigationItems.map((item) => {
									return (
										<li className="hover:text-blue-700">
											<NavLink
												className={({ isActive, isPending }) =>
													isPending ? "pending" : isActive ? "font-bold" : ""
												}
												to={item.path}
											>
												{item.label}
											</NavLink>
										</li>
									);
								})}

								<div className="flex flex-col justify-start items-center gap-5">
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
