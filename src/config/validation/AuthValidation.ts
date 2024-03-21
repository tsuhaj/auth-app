import * as yup from "yup";

export const AUTH_FIELDS = {
	EMAIL: "email",
	PASSWORD: "password",
};

export const authSchema = yup
	.object({
		[AUTH_FIELDS.EMAIL]: yup.string().email().required(),
		[AUTH_FIELDS.PASSWORD]: yup.string().min(8).required(),
	})
	.required();
