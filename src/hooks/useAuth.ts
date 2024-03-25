import { IUser } from "@/config/types";
import { LOCAL_STORAGE_USER_KEY, login, logout } from "../config/redux/authSlice";
import { useAppDispatch, useAppSelector } from "../config/redux/store";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

const useAuth = () => {
	//user + token
	const { user } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const loginUser = (user: IUser) => {
		localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
		dispatch(login(user));
	};

	const logoutUser = () => {
		signOut(auth);
		localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
		dispatch(logout());
	};

	useEffect(() => {
		console.log("User state changed, current value: " + JSON.stringify(user));
	}, [user]);

	return {
		user,
		isLoggedIn: user != null,
		loginUser,
		logoutUser,
	};
};

export default useAuth;
