import React from "react";
import { useState, useEffect } from "react";
import { clickDecorator, isAnyFieldSelected } from "./helper";
import step_2 from "../../images/step_2.svg";
export default function ValuesSlide({
	resetTheForm,
	nextClickHandler,
	prevClickHandler,
	values,
	setValues,
}) {
	// Local state
	let initialState = {
		"Recognition through success": false,
		Sustainability: false,
		"Safe and secure": false,
		"Innovation and disruption": false,
		"Simple and intuitive": false,
		"Aesthetic and beneficial": false,
		"Increase profits": false,
		"Sharing is caring": false,
	};
	const [selectedValues, setSelectedValues] = useState(initialState);

	// Run this every time the form is reseted so we start
	// with all field uncheked
	useEffect(() => {
		setSelectedValues(initialState);
	}, [resetTheForm]);

	const onChangeClickHandler = (e) => {
		let key = e.target.value;
		let value = selectedValues[key];

		//update the local state
		setSelectedValues({
			...selectedValues,
			[key]: !value,
		});

		// and then update the parent state
		let currentValue = e.target.value;
		if (values.includes(currentValue)) {
			let newValues = values.filter((e) => e !== currentValue);
			setValues(newValues);
		} else {
			let newValues = values.concat();
			newValues.push(currentValue);
			setValues(newValues);
		}
	};
	return (
		<div className="contact__slider-slide">
			<fieldset className="contact__slide-fieldset">
				<div className="contact__slide-core">
					<legend className="contact__slide-title">
						What are your values?
					</legend>
					<p className="contact__progress-indicator">
						<img src={step_2} alt="step indicator" />
					</p>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Recognition_through_success"
						value="Recognition through success"
						checked={selectedValues["Recognition through success"]}
						onChange={onChangeClickHandler}
					></input>
					<label
						htmlFor="Recognition_through_success"
						className="contact__slide-field"
					>
						Recognition through success
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Sustainability"
						value="Sustainability"
						checked={selectedValues["Sustainability"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Sustainability" className="contact__slide-field">
						Sustainability
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Safe_and_secure"
						value="Safe and secure"
						checked={selectedValues["Safe and secure"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Safe_and_secure" className="contact__slide-field">
						Safe and secure
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Innovation_and_disruption"
						value="Innovation and disruption"
						checked={selectedValues["Innovation and disruption"]}
						onChange={onChangeClickHandler}
					></input>
					<label
						htmlFor="Innovation_and_disruption"
						className="contact__slide-field"
					>
						Innovation and disruption
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Simple_and_intuitive"
						value="Simple and intuitive"
						checked={selectedValues["Simple and intuitive"]}
						onChange={onChangeClickHandler}
					></input>
					<label
						htmlFor="Simple_and_intuitive"
						className="contact__slide-field"
					>
						Simple and intuitive
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="MnAAesthetic_and_beneficial"
						value="Aesthetic and beneficial"
						checked={selectedValues["Aesthetic and beneficial"]}
						onChange={onChangeClickHandler}
					></input>
					<label
						htmlFor="MnAAesthetic_and_beneficial"
						className="contact__slide-field"
					>
						Aesthetic and beneficial
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Increase_profits"
						value="Increase profits"
						checked={selectedValues["Increase profits"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Increase_profits" className="contact__slide-field">
						Increase profits
					</label>
					<input
						form="contact"
						type="checkbox"
						name="values"
						className="contact__slide-input"
						id="Sharing_is_caring"
						value="Sharing is caring"
						checked={selectedValues["Sharing is caring"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Sharing_is_caring" className="contact__slide-field">
						Sharing is caring
					</label>
				</div>
			</fieldset>
			<div className="contact__slide-btn-container pt-3">
				<button
					className="contact__slider-prevBtn"
					type="button"
					onClick={prevClickHandler}
				>
					Previous Step
				</button>
				<button
					className={"contact__slider-nextBtn".concat(
						isAnyFieldSelected(selectedValues)
							? " contact__slider-nextBtn-active"
							: ""
					)}
					onClick={clickDecorator(nextClickHandler, selectedValues)}
					type="button"
				>
					Next Step
				</button>
			</div>
		</div>
	);
}
