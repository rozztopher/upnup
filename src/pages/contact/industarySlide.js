import React from "react";
import { useState, useEffect } from "react";
import { clickDecorator, isAnyFieldSelected } from "./helper";
import step_1 from "../../images/step_1.svg";

export default function IndustarySlide({
	resetTheForm,
	nextClickHandler,
	industries,
	setIndustries,
}) {
	let initialState = {
		commerce: false,
		construction: false,
		consulting: false,
		finance: false,
		"health and social services": false,
		"music/arts": false,
		tech: false,
		other: false,
	};
	// Local state
	const [selectedIndustries, setSelectedIndustries] = useState(initialState);

	// Run this every time the form is reseted so we start
	// with all field uncheked
	useEffect(() => {
		setSelectedIndustries(initialState);
	}, [resetTheForm]);

	const onChangeHandler = (e) => {
		let key = e.target.value.toLowerCase();
		let value = selectedIndustries[key];
		//update the local state
		setSelectedIndustries({
			...initialState,
			[key]: !value,
		});

		// and then update the parent state
		let industary = e.target.value;
		if (industries.includes(industary)) {
			// let newIndustries = industries.filter((e) => e !== industary);
			setIndustries([]);
		} else {
			
			setIndustries([industary]);
		}
	};

	return (
		<div className="contact__slider-slide">
			<fieldset className="contact__slide-fieldset">
				<div className="contact__slide-core">
					<legend className="contact__slide-title">
						What is your industry?
					</legend>
					<p className="contact__progress-indicator">
						<img src={step_1} alt="step indicator" />
					</p>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="Commerce"
						value="Commerce"
						checked={selectedIndustries.commerce}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="Commerce" className="contact__slide-field">
						Commerce
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="Construction"
						value="Construction"
						checked={selectedIndustries.construction}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="Construction" className="contact__slide-field">
						Construction
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="Consulting"
						value="Consulting"
						checked={selectedIndustries.consulting}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="Consulting" className="contact__slide-field">
						Consulting
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="Finance"
						value="Finance"
						checked={selectedIndustries.finance}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="Finance" className="contact__slide-field">
						Finance
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="HnS"
						value="Health and Social Services"
						checked={selectedIndustries["health and social services"]}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="HnS" className="contact__slide-field">
						Health and Social Services
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="MnA"
						value="Music/Arts"
						checked={selectedIndustries["music/arts"]}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="MnA" className="contact__slide-field">
						Music/Arts
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="Tech"
						value="Tech"
						checked={selectedIndustries.tech}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="Tech" className="contact__slide-field">
						Tech
					</label>
					<input
						form="contact"
						type="checkbox"
						name="industaries"
						className="contact__slide-input"
						id="Other"
						value="Other"
						checked={selectedIndustries.other}
						onChange={onChangeHandler}
					></input>
					<label htmlFor="Other" className="contact__slide-field">
						Other
					</label>
				</div>
			</fieldset>
			<div className="contact__slide-btn-container pt-3">
				<button className="contact__slider-prevBtn" type="button" disabled>
					Previous Step
				</button>
				<button
					className={"contact__slider-nextBtn".concat(
						isAnyFieldSelected(selectedIndustries)
							? " contact__slider-nextBtn-active"
							: ""
					)}
					onClick={clickDecorator(nextClickHandler, selectedIndustries)}
					type="button"
				>
					Next Step
				</button>
			</div>
		</div>
	);
}
