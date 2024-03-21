import { forwardRef } from "react";
import { Input } from "@/components/shadcnui/ui/input";
import { Label } from "./shadcnui/ui/label";

interface WrappedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	className?: string;
	error: string;
}

const WrappedInput = forwardRef<HTMLInputElement, WrappedInputProps>(({ label, error, name, ...props }, ref) => {
	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor={name}>{label}</Label>
			<Input ref={ref} {...props} name={name} />
			{error?.length && <p className="text-red-700 text-sm">{error}</p>}
		</div>
	);
});

export default WrappedInput;
