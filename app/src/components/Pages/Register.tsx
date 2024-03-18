import { FC } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH_FIELDS, authSchema } from "../../config/validation/AuthValidation";
import { Link } from "react-router-dom";
import { WHITE } from "../../config/colors";
import Quotation from "../../assets/SvgIcons/Quotation";
import GoogleIcon from "../../assets/SvgIcons/GoogleIcon";
import NavbarIcon from "../NavbarIcon";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useNotification from "../../hooks/useNotification";
import { NotificationSeverity } from "../../config/types";
import { app } from "../../config/firebase";
import { firebaseErrors, getFirebaseError } from "../../config/validation/errors";

const Register: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(authSchema) });

	const { createNotification } = useNotification();

	const onSubmit = handleSubmit((data) => {
		const auth = getAuth(app);
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				createNotification({
					text: "Your account was just created",
					type: NotificationSeverity.SUCCESS,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);

				createNotification({
					text: getFirebaseError(errorCode),
					type: NotificationSeverity.ERROR,
				});
				// ..
			});
	});

	return (
		<div className="flex justify-center items-center dark:bg-neutral-950 border-r border-r-neutral-900 py-20">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="text-2xl font-bold dark:text-gray-200">Create your account now</h1>
				<h6 className="text-gray-500 ">Enjoy all the benefits</h6>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="border border-neutral-200 my-6 w-[400px] bg-neutral-100 dark:border-neutral-800 dark:border-opacity-80 dark:bg-neutral-900 rounded-md p-8 dark:text-gray-300 flex flex-col gap-8"
				>
					<Button label={"Continue with Google"} variant={"secondary"} icon={<GoogleIcon color={WHITE} />} />

					<div className="flex items-center w-full">
						<div className="flex-grow border-t border-gray-500"></div>
						<span className="flex-shrink mx-4 text-gray-500">or</span>
						<div className="flex-grow border-t border-gray-500"></div>
					</div>

					<Input
						label={"Email"}
						className={""}
						placeholder="email@address.com"
						error={errors?.[AUTH_FIELDS.EMAIL]?.message as string}
						{...register(AUTH_FIELDS.EMAIL)}
					/>
					<Input
						label={"Password"}
						type="password"
						className={""}
						error={errors?.[AUTH_FIELDS.PASSWORD]?.message as string}
						placeholder="Password"
						{...register(AUTH_FIELDS.PASSWORD)}
					/>
					<p className="text-sm text-center text-gray-400">
						Already have an account ?{" "}
						<Link to={"/login"} className="text-blue-700 font-bold">
							Login
						</Link>
					</p>
					<Button type="submit" label={"Register"} variant={"primary"} />
				</form>
				<p className="text-xs text-gray-500 text-center">
					By continuing, you agree to App's <u>Terms of Service</u> and <u>Privacy Policy</u>.
				</p>
			</div>
		</div>
	);
};

export default Register;
