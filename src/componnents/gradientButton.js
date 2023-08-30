import React from "react";
import { Link } from "react-router-dom";
const GradientButton = ({ title, url, size, className }) => {
	
	let classes = `gradientButton ${className}`;
	if (size === "sm") {
		classes = `gradientButton__sm ${className}`;
	}
	return (
		<Link to={url} className={classes}>
			{title}
		</Link>
	);
};
export default GradientButton;
