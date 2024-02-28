import { FC } from "react";
import { SvgIconsProps } from "../../config/types";

const Quotation: FC<SvgIconsProps> = ({ color, className }) => {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			data-reactroot=""
		>
			<path
				fill={color}
				d="M8 8C6.89228 8 6 8.89228 6 10V14C6 14.5523 5.55228 15 5 15C4.44772 15 4 14.5523 4 14V10C4 7.78772 5.78772 6 8 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8H8Z"
				clipRule="evenodd"
				fillRule="evenodd"
			></path>
			<path
				fill={color}
				d="M6 12H9C9.55 12 10 12.45 10 13V16C10 16.55 9.55 17 9 17H6C5.45 17 5 16.55 5 16V13C5 12.45 5.45 12 6 12Z"
			></path>
			<path
				fill={color}
				d="M4 13C4 11.8977 4.89772 11 6 11H9C10.1023 11 11 11.8977 11 13V16C11 17.1023 10.1023 18 9 18H6C4.89772 18 4 17.1023 4 16V13ZM9 13H6V16H9V13Z"
				clipRule="evenodd"
				fillRule="evenodd"
			></path>
			<path
				fill={color}
				d="M17 8C15.8923 8 15 8.89228 15 10V14C15 14.5523 14.5523 15 14 15C13.4477 15 13 14.5523 13 14V10C13 7.78772 14.7877 6 17 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H17Z"
				clipRule="evenodd"
				fillRule="evenodd"
			></path>
			<path
				fill={color}
				d="M15 12H18C18.55 12 19 12.45 19 13V16C19 16.55 18.55 17 18 17H15C14.45 17 14 16.55 14 16V13C14 12.45 14.45 12 15 12Z"
			></path>
			<path
				fill={color}
				d="M13 13C13 11.8977 13.8977 11 15 11H18C19.1023 11 20 11.8977 20 13V16C20 17.1023 19.1023 18 18 18H15C13.8977 18 13 17.1023 13 16V13ZM18 13H15V16H18V13Z"
				clipRule="evenodd"
				fillRule="evenodd"
			></path>
		</svg>
	);
};

export default Quotation;
