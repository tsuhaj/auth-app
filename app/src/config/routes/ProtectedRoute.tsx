import { FC } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute: FC = () => {
	//TODO: check auth
	return <Outlet />;
};

export default ProtectedRoute;
