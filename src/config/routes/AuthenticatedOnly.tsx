import useAuth from "@/hooks/useAuth";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedOnly: FC = () => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AuthenticatedOnly;
