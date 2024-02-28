import { FC } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH_FIELDS, authSchema } from "../../config/validation/AuthValidation";
import { Link } from "react-router-dom";

type FormData = {
	email: string;
	password: string;
};

const Login: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(authSchema) });

	const onSubmit = handleSubmit((data: FormData) => console.log(data));

	return (
		<div className="flex flex-col items-center justify-center py-16 gap-3">
			<h1 className="text-2xl font-bold dark:text-gray-200 ">Sign in to your account</h1>
			<h6 className="dark:text-gray-500 ">Enjoy all the benefits</h6>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-8 w-[400px] bg-gray-800 bg-opacity-50 rounded-md p-8 dark:text-gray-300 flex flex-col gap-8"
			>
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
					Dont have an account ?{" "}
					<Link to={"/register"} className="text-sky-500">
						Register now
					</Link>
				</p>
				<Button type="submit" label={"Login"} variant={"primary"} />
			</form>
		</div>
	);
};

export default Login;
