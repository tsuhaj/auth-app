import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FC, useEffect } from "react";

const LayoutLayer: FC = () => {
	useEffect(() => {
		console.log("useEffect in LayoutLayer");
	}, []);

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
