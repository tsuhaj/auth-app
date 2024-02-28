import { FC } from "react";
import { SvgIconsProps } from "../../config/types";

const GoogleIcon: FC<SvgIconsProps> = ({ color }) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
			<path
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="1"
				stroke={color}
				fill="none"
				d="M12.6 22C6.76 22 2 17.51 2 12C2 6.49 6.76 2 12.6 2C15.2 2 17.7 2.88 19.29 4.35C19.84 4.86 19.85 5.7 19.31 6.22C18.77 6.74 17.89 6.75 17.33 6.24C16.26 5.25 14.44 4.64 12.59 4.64C8.29 4.64 4.79 7.94 4.79 12C4.79 16.06 8.29 19.36 12.59 19.36C16.41 19.36 18.33 16.81 18.97 14.18H12.35C11.58 14.18 10.95 13.59 10.95 12.86C10.95 12.13 11.58 11.54 12.35 11.54H20.59C20.98 11.54 21.35 11.69 21.61 11.96C21.87 12.23 22.01 12.59 21.98 12.95C21.58 18.37 17.81 22 12.6 22Z"
			></path>
		</svg>
	);
};

export default GoogleIcon;
