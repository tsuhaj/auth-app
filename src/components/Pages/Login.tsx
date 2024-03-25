import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH_FIELDS, authSchema } from "../../config/validation/AuthValidation";
import { Link } from "react-router-dom";
import { Button } from "../shadcnui/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcnui/ui/card";
import WrappedInput from "../WrappedInput";
import Icons from "../../assets/Icons";
import Form from "../Form";

export type FormData = {
	email: string;
	password: string;
};

const Login: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver<FormData>(authSchema) });

	const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
		console.log(data);
		// Add your async logic here
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>Enter your email and password below.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<WrappedInput
					label={"Email"}
					placeholder="email@address.com"
					error={(errors && errors[AUTH_FIELDS.EMAIL as keyof typeof errors]?.message) || ""}
					{...register(AUTH_FIELDS.EMAIL as keyof FormData)}
				/>
				<WrappedInput
					label={"Password"}
					type="password"
					placeholder="Password"
					error={(errors && errors[AUTH_FIELDS.PASSWORD as keyof typeof errors]?.message) || ""}
					{...register(AUTH_FIELDS.PASSWORD as keyof FormData)}
				/>
			</CardContent>
			<CardFooter>
				<div className="flex flex-col gap-4 w-full">
					<Button type="submit" variant="default" className="w-full">
						Login
					</Button>

					<p className="text-sm text-center text-muted-foreground">
						Dont have an account ?{" "}
						<Link to={"/register"} className="text-primary">
							Registerr now
						</Link>
					</p>

					<div className="flex items-center w-full">
						<div className="flex-grow border-t text-muted-foreground"></div>
						<span className="flex-shrink mx-4 text-muted-foreground">or</span>
						<div className="flex-grow border-t text-muted-foreground"></div>
					</div>
					<Button variant={"outline"} className="flex gap-2" type="button">
						<Icons.google width={16} height={16} />
						Continue with Google
					</Button>
				</div>
			</CardFooter>
		</Form>
	);
};

export default Login;
