import * as yup from "yup";

export const AUTH_FIELDS = {
	EMAIL: "email",
	PASSWORD: "password",
};

export const authSchema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
	})
	.required();
