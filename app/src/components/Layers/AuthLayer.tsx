import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthLayer: FC = () => {
	useEffect(() => {
		console.log("useEffect in AuthLayer");

		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				console.log("user restored:" + JSON.stringify(user));
				//alert(uid);
				// ...
			} else {
				// User is signed out
				// ...
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
