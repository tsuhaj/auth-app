import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeToggle from "./ThemeToggler";
import ButtonGroup from "./ButtonGroup";
import { BLACK, WHITE } from "../config/colors";
import useAppTheme, { THEME } from "../hooks/useAppTheme";
import useWindowSize from "../hooks/useWindowSize";
import Logo from "../assets/Logo";
import { Button } from "./shadcnui/ui/button";
import Icons from "@/assets/Icons";
import NavbarAccount from "./NavbarAccount";
import useAuth from "@/hooks/useAuth";

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

	const { isLoggedIn } = useAuth();

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
		<header className="p-4 border-b">
			<nav className="max-w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
				<div className="flex flex-row justify-between items-center gap-10 w-full md:w-auto">
					<Logo className="w-44 h-auto" color={theme == THEME.DARK ? WHITE : BLACK} />

					{menuOpen ? (
						<Icons.close width={16} height={16} className="hover:cursor-pointer inline-block md:hidden" onClick={toggleMenu} />
					) : (
						<Icons.menu width={16} height={16} className="hover:cursor-pointer inline-block md:hidden" onClick={toggleMenu} />
					)}

					<div className={`hidden md:block`}>
						<ul className="text-foreground font-medium text-sm flex flex-col md:flex-row md:gap-8">
							{navigationItems.map((item) => {
								return (
									<li className="hover:text-primary">
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
						{isLoggedIn ? (
							<NavbarAccount />
						) : (
							<>
								<Button variant="default" onClick={redirectToLogin}>
									Login
								</Button>
								<Button variant="secondary" onClick={redirectToRegister}>
									Register
								</Button>
							</>
						)}
					</ButtonGroup>
				</div>

				{menuOpen && (
					<>
						<div className="absolute top-[80px] left-0 h-full w-full bg-background flex justify-center">
							<ul className="text-foreground font-medium text-xl flex flex-col items-center gap-5 p-6 mt-14">
								{navigationItems.map((item) => {
									return (
										<li className="hover:text-primary">
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
									{isLoggedIn ? (
										<NavbarAccount />
									) : (
										<>
											<Button variant="default" onClick={redirectToLogin}>
												Login
											</Button>
											<Button variant="secondary" onClick={redirectToRegister}>
												Register
											</Button>
										</>
									)}
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
