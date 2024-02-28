import { FC } from "react";
import { SvgIconsProps } from "../../config/types";

const Menu: FC<SvgIconsProps> = ({ color, onClick, className }) => {
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
			<path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke={color} d="M3 18H21"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke={color} d="M3 12H21"></path>
			<path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke={color} d="M3 6H21"></path>
		</svg>
	);
};

export default Menu;
