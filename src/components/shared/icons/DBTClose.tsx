import React from "react";

type IconProps = {
	width?: number;
	height?: number;
	color?: string;
	className?: string;
};

export const DBTClose: React.FC<IconProps> = ({
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
		<path d="M18 6L6 18"
		stroke={color}
		strokeLinecap="round"
		strokeWidth="1.5px"
		stroke-linejoin="round"
		/>
		<path d="M6 6L18 18"
		stroke={color}
		strokeLinecap="round"
		strokeWidth="1.5px"
		stroke-linejoin="round"
		/>
	</svg>
);