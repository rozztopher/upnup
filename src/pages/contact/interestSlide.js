import React from "react";
import { useState, useEffect } from "react";
import { clickDecorator, isAnyFieldSelected } from "./helper";
import step_3 from "../../images/step_3.svg";
export default function InterestSlide({
	resetTheForm,
	nextClickHandler,
	prevClickHandler,
	interests,
	setInterests,
}) {
	let initialState = {
		"Corporate Branding": false,
		"NFT Creation": false,
		"Augmented Productivity": false,
		"Personal Branding": false,
		"Immersive Web Apps": false,
		"NFT Consulting": false,
		"Product Branding": false,
		"Virtual Stores": false,
		"Immersive Tech Consulting": false,
		"Virtual Galleries": false,
		"Other interest": false,
	};
	let [selectedInterests, setSelectedInterests] = useState(initialState);
	// Run this every time the form is reseted so we start
	// with all field uncheked
	useEffect(() => {
		setSelectedInterests(initialState);
	}, [resetTheForm]);

	const onChangeClickHandler = (e) => {
		let key = e.target.value;
		let value = selectedInterests[key];

		//update the local state
		setSelectedInterests({
			...selectedInterests,
			[key]: !value,
		});

		let currentInterest = e.target.value;
		if (interests.includes(currentInterest)) {
			let newValues = interests.filter((e) => e !== currentInterest);
			setInterests(newValues);
		} else {
			let newInterests = interests.concat();
			newInterests.push(currentInterest);
			setInterests(newInterests);
		}
	};
	return (
		<div className="contact__slider-slide">
			<fieldset className="contact__slide-fieldset">
				<div className="contact__slide-core">
					<legend className="contact__slide-title">
						Which services are of interest?
					</legend>
					<p className="contact__progress-indicator">
						<img src={step_3} alt="step indicator" />
					</p>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Corporate_Branding"
						value="Corporate Branding"
						checked={selectedInterests["Corporate Branding"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Corporate_Branding" className="contact__slide-field">
						Corporate Branding
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="NFT_Creation"
						value="NFT Creation"
						checked={selectedInterests["NFT Creation"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="NFT_Creation" className="contact__slide-field">
						NFT Creation
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Augmented_Productivity"
						value="Augmented Productivity"
						checked={selectedInterests["Augmented Productivity"]}
						onChange={onChangeClickHandler}
					></input>
					<label
						htmlFor="Augmented_Productivity"
						className="contact__slide-field"
					>
						Augmented Productivity
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Personal_Branding"
						value="Personal Branding"
						checked={selectedInterests["Personal Branding"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Personal_Branding" className="contact__slide-field">
						Personal Branding
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Immersive_Web_Apps"
						value="Immersive Web Apps"
						checked={selectedInterests["Immersive Web Apps"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Immersive_Web_Apps" className="contact__slide-field">
						Immersive Web Apps
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="NFT_Consulting"
						value="NFT Consulting"
						checked={selectedInterests["NFT Consulting"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="NFT_Consulting" className="contact__slide-field">
						NFT Consulting
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Product_Branding"
						value="Product Branding"
						checked={selectedInterests["Product Branding"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Product_Branding" className="contact__slide-field">
						Product Branding
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Virtual_Stores"
						value="Virtual Stores"
						checked={selectedInterests["Virtual Stores"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Virtual_Stores" className="contact__slide-field">
						Virtual Stores
					</label>

					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Immersive_Tech_Consulting"
						value="Immersive Tech Consulting"
						checked={selectedInterests["Immersive Tech Consulting"]}
						onChange={onChangeClickHandler}
					></input>
					<label
						htmlFor="Immersive_Tech_Consulting"
						className="contact__slide-field"
					>
						Immersive Tech Consulting
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="Virtual_Galleries"
						value="Virtual Galleries"
						checked={selectedInterests["Virtual Galleries"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="Virtual_Galleries" className="contact__slide-field">
						Virtual Galleries
					</label>
					<input
						form="contact"
						type="checkbox"
						name="interests"
						className="contact__slide-input"
						id="interest_other"
						value="Other interest"
						checked={selectedInterests["Other interest"]}
						onChange={onChangeClickHandler}
					></input>
					<label htmlFor="interest_other" className="contact__slide-field">
						Other
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
						isAnyFieldSelected(selectedInterests)
							? " contact__slider-nextBtn-active"
							: ""
					)}
					onClick={clickDecorator(nextClickHandler, selectedInterests)}
					type="button"
				>
					Next Step
				</button>
			</div>
		</div>
	);
}
