import { useEffect, useState } from "react";

interface WindowSize {
	width: number;
	height: number;
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const onResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return {
		...windowSize,
		isMobile: windowSize.width <= 768,
	};
};

export default useWindowSize;
