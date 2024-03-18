import { useAppDispatch, useAppSelector } from "../config/redux/store";
import { login } from "../config/redux/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface TestComponentProps {
	text: string;
}

const TestComponent = ({ text = "lamka" }: TestComponentProps) => {
	const token = useAppSelector((state) => state.auth.token);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const loginUser = () => {
		dispatch(login("ideckoUsera" + new Date().toString()));
		navigate("/laka");
	};

	useEffect(() => {
		console.log("aktualny token je:", token);
	}, [token]);

	return (
		<div className="bg-black text-center text-lg text-white">
			{token}
			<button onClick={loginUser}>Login user</button>
		</div>
	);
};

export default TestComponent;
