import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH_FIELDS, authSchema } from "../../config/validation/AuthValidation";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useNotification from "../../hooks/useNotification";
import { NotificationSeverity } from "../../config/types";
import { app, auth } from "../../config/firebase";
import { firebaseErrors, getFirebaseError } from "../../config/validation/errors";
import { Button } from "../shadcnui/ui/button";
import Icons from "@/assets/Icons";
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../shadcnui/ui/card";
import WrappedInput from "../WrappedInput";
import Form from "../Form";

const Register: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(authSchema) });

	const { createNotification } = useNotification();

	const onSubmit = handleSubmit((data) => {
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				createNotification({
					title: "Account created",
					text: "You are now logged in as " + user.email,
					type: NotificationSeverity.DEFAULT,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);

				createNotification({
					title: "Error",
					text: getFirebaseError(errorCode),
					type: NotificationSeverity.DESTRUCTIVE,
				});
			});
	});

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<CardHeader>
					<CardTitle>Register</CardTitle>
					<CardDescription>Enter your email and password below.</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<WrappedInput
						label={"Email"}
						placeholder="email@address.com"
						error={errors?.[AUTH_FIELDS.EMAIL]?.message as string}
						{...register(AUTH_FIELDS.EMAIL)}
					/>
					<WrappedInput
						label={"Password"}
						type="password"
						placeholder="Password"
						error={errors?.[AUTH_FIELDS.PASSWORD]?.message as string}
						{...register(AUTH_FIELDS.PASSWORD)}
					/>
				</CardContent>
				<CardFooter>
					<div className="flex flex-col gap-4 w-full">
						<Button type="submit" variant="default" className="w-full">
							Register
						</Button>

						<p className="text-sm text-center text-muted-foreground">
							Already have an account ?{" "}
							<Link to={"/login"} className="text-primary">
								Login
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
			<p className="text-xs text-gray-500 text-center mt-6">
				By continuing, you agree to App's <u>Terms of Service</u> and <u>Privacy Policy</u>.
			</p>
		</>
	);
};

export default Register;
