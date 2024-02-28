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
import Logo from "../../assets/SvgIcons/Logo";
import useNotification from "../../hooks/useNotification";
import { NotificationSeverity } from "../../config/types";

const Register: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(authSchema) });

	const { createNotification } = useNotification();

	const onSubmit = handleSubmit((data) => {
		createNotification({ text: "Your account was banned, sorry!", title: "You are banned!", type: NotificationSeverity.ERROR });
		//alert(data.email);
		/*
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
            */
	});

	return (
		<div className="grid grid-cols-12 h-lvh">
			<div className="col-span-12 xl:col-span-5 flex justify-center items-center dark:bg-neutral-950 border-r border-r-neutral-900 py-20">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold dark:text-gray-200">Create your account now</h1>
					<h6 className="text-gray-500 ">Enjoy all the benefits</h6>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="my-6 w-[400px] bg-neutral-100 dark:bg-neutral-900 rounded-md p-8 dark:text-gray-300 flex flex-col gap-8"
					>
						<Button label={"Continue with Google"} variant={"secondary"} icon={<GoogleIcon color={WHITE} />} />
						<div className="inline-flex items-center justify-center w-full relative">
							<hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-700" />
							<span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white">or</span>
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
							<Link to={"/login"} className="text-sky-500">
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
			<div className="hidden xl:flex col-span-12 md:col-span-7 bg-neutral-00 dark:bg-neutral-950 flex-col items-center justify-center bg-opacity-80">
				<div className="w-1/2 flex flex-col gap-2">
					<Quotation color={WHITE} className="scale-[4] absolute opacity-20" />
					<blockquote className="text-gray-300 text-2xl font-light">
						"Financial success is not merely about the size of your investments, but the wisdom behind them. Every dollar spent
						or saved today is a seed planted for the harvest of tomorrow's prosperity."
					</blockquote>
					<p className="font-bold text-gray-400">Author of the quote</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
