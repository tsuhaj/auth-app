import { AuthSlice, login, logout } from "../config/redux/authSlice";
import { useAppDispatch, useAppSelector } from "../config/redux/store";

const LOCAL_STORAGE_USER_KEY = "firebase_user";
const LOCAL_STORAGE_TOKEN_KEY = "firebase_token";

const useAuth = () => {
	//user + token
	const { user, token } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
    
	const loginUser = (user: AuthSlice) => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, user.token ?? "");
		localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
		dispatch(login(user));
	};

	const logoutUser = () => {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
		localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
		dispatch(logout());
	};
};

export default useAuth;
