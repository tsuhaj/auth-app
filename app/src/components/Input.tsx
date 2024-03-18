import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	className: string;
	error: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, placeholder, error, type, ...props }, ref) => {
	return (
		<>
			<label className="text-sm">
				{label}
				<input
					type={type ?? "text"}
					ref={ref}
					className={`${className} block w-full my-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-800 text-sm px-3 py-2  focus:outline-none`}
					placeholder={placeholder}
					{...props}
				/>
				{error?.length && <p className="text-red-700">{error}</p>}
			</label>
		</>
	);
});

export default Input;
