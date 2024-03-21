import { FC } from "react";

interface ButtonGroupProps {
	children?: React.ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }): JSX.Element => {
	return <div className="flex flex-col md:flex-row gap-3 items-center">{children}</div>;
};

export default ButtonGroup;
