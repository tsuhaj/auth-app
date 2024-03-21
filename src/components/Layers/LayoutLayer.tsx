import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FC, useEffect } from "react";
import useAppTheme from "../../hooks/useAppTheme";

const LayoutLayer: FC = () => {
	useEffect(() => {
		console.log("useEffect in LayoutLayer");
	}, []);

	const location = useLocation();
	const { hash, pathname, search } = location;

	const x = useAppTheme();

	return (
		<>
			<Navbar />
			<Outlet />
			<div id="full-screen-menu"></div>
			<Footer />
		</>
	);
};

export default LayoutLayer;
