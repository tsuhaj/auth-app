import { FC } from "react";
import { SvgIconsProps } from "../../config/types";

const Close: FC<SvgIconsProps> = ({ color, onClick, className }) => {
	return (
		<svg
			className={className}
			onClick={onClick}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			data-reactroot=""
		>
			<path strokeLinejoin="round" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="1" stroke={color} d="M2 2L22 22"></path>
			<path strokeLinejoin="round" stroke-Linecap="round" stroke-miterlimit="10" strokeWidth="1" stroke={color} d="M22 2L2 22"></path>
		</svg>
	);
};

export default Close;
