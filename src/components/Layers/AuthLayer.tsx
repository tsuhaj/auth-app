import useAuth from "@/hooks/useAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthLayer: FC = () => {
	const { loginUser, logoutUser } = useAuth();

	useEffect(() => {
		console.log("useEffect in AuthLayer");

		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				//console.log("user restored:" + JSON.stringify(user));
				//alert(uid);
				// ...
				loginUser({ name: uid.toString(), email: "email" });
			} else {
				logoutUser();
			}
		});

		return () => {
			console.log("unmount");
			unsubscribe();
		};
	}, []);

	return <Outlet />;
};

export default AuthLayer;
