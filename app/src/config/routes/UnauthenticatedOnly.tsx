import useAuth from "@/hooks/useAuth";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const UnauthenticatedOnly: FC = () => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
};

export default UnauthenticatedOnly;
