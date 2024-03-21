import { FC } from "react";
import { Card } from "./shadcnui/ui/card";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: FC<FormProps> = ({ children, onSubmit, ...props }) => {
	return (
		<Card className="mt-16 mx-12 md:w-[350px] md:mx-auto">
			<form onSubmit={onSubmit}>{children}</form>
		</Card>
	);
};

export default Form;
