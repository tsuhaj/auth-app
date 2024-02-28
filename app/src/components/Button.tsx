import { FC } from "react";

export type VariantType = "primary" | "secondary" | "destructive" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	label: string;
	variant: VariantType;
	icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick = () => {}, variant, label, type, icon, ...props }) => {
	const generateDesignFromVariant = () => {
		switch (variant) {
			case "primary":
				return "bg-black text-white dark:text-black hover:bg-opacity-80 dark:bg-white";
			case "secondary":
				return "bg-neutral-700 text-white hover:bg-neutral-800";
			case "destructive":
				return "bg-red-200";
			case "outline":
				return "";
			default:
				return "";
		}
	};

	const finalCSS = generateDesignFromVariant();

	return (
		<button onClick={onClick} type={type ?? "button"} {...props} className={`${finalCSS} text-sm rounded-md py-2 px-4 font-medium`}>
			{icon ? (
				<>
					<div className="flex justify-center items-center gap-2">
						<div>{icon}</div>
						<div>{label}</div>
					</div>
				</>
			) : (
				label
			)}
		</button>
	);
};

export default Button;
