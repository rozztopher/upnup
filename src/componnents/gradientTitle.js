import React from "react";

const GradientTitle = ({ title, className }) => {
	if (className)
		return (
			<div className="gradient__wrapper">
				<span className={`gradient__title ${className}`}>{title}</span>;
			</div>
		);
	return <span className={`gradient__title`}>{title}</span>;
};

export default GradientTitle;
