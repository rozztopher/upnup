import React from "react";

export default function EnterExperienceButton(props) {
	return (
		<button
			className="enter-button mt-2"
			onClick={props.enterVR}
			style={{
				background: `linear-gradient(to right, #8f27e1 0%, #1bf1ad  ${
					props.progress
				}% , rgba(255, 255, 255, 0.42) ${0}%)`,
			}}
		>
			{props.progress === 100 ? "Enter Experience" : "Loading Experience"}
		</button>
	);
}
