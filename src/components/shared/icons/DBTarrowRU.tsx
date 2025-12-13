import React from "react";

type IconProps = {
width?: number;
height?: number;
color?: string;
className?: string;
};

export const DBTArrowRightUp: React.FC<IconProps> = ({
width = 24,
height = 24,
color = "#21201C",
className,
}) => (
<svg
	width={width}
	height={height}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	className={className}
>
	<path
	d="M9.31803 6.69674H17.8033M17.8033 6.69674V15.182M17.8033 6.69674L7.19671 17.3033"
	stroke={color}
	strokeLinecap="round"
	strokeWidth="1.5px"
	/>
</svg>
);