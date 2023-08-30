import React from "react";
import { useState } from "react";
import step_5 from "../../images/step_5.svg";
import {
	submitDecorator,
	validateName,
	validateEmail,
	validateNumber,
} from "./helper";
export default function FormSlide({
	nextClickHandler,
	prevClickHandler,
	industries,
	values,
	interests,
}) {
	let [isValidForm, setIsValidForm] = useState({
		isValidName: false,
		isValidEamil: false,
		isValidTel: false,
		isValidData: false,
	});
	const validateForm = () => {
		return (
			isValidForm.isValidName &&
			isValidForm.isValidEamil &&
			isValidForm.isValidTel &&
			isValidForm.isValidData
		);
	};

	let [personlInfo, setPersonalInfo] = useState({
		name: "",
		company: "",
		email: "",
		tel: "",
		message: "",
		data: false,
	});

	const onChangeHandler = (e) => {
		let target = e.target;
		let key = e.target.name;
		let value = e.target.value;
		setPersonalInfo((prevState) => ({ ...prevState, [key]: value }));
		if (key === "name") {
			let isValidName = validateName(value);
			if (!isValidName) {
				target.classList.add("contact__form-personal-invalid");
			} else {
				target.classList.remove("contact__form-personal-invalid");
			}
			setIsValidForm((prevState) => ({
				...prevState,
				isValidName: isValidName,
			}));
		}
		if (key === "email") {
			let isValidEamil = validateEmail(value);

			if (!isValidEamil) {
				target.classList.add("contact__form-personal-invalid");
			} else {
				target.classList.remove("contact__form-personal-invalid");
			}
			setIsValidForm((prevState) => ({
				...prevState,
				isValidEamil: isValidEamil,
			}));
		}
		if (key === "tel") {
			let isValidTel = validateNumber(value);
			if (!isValidTel) {
				target.classList.add("contact__form-personal-invalid");
			} else {
				target.classList.remove("contact__form-personal-invalid");
			}
			setIsValidForm((prevState) => ({
				...prevState,
				isValidTel: isValidTel,
			}));
		}
	};
	const onDataChangeHandler = (e) => {
		let isValidData = personlInfo.data;
		setPersonalInfo((prevState) => ({
			...prevState,
			data: !prevState.data,
		}));
		setIsValidForm((prevState) => ({
			...prevState,
			isValidData: !isValidData,
		}));
		if(personlInfo.data){
			e.target.classList.add("contact__form-personal-invalid");
		}else {
			e.target.classList.remove("contact__form-personal-invalid");
		}
	};
	return (
		<div className="contact__slider-slide">
			<fieldset className="contact__slide-fieldset">
				<div className="contact__slide-core">
					<legend className="contact__slide-title">Personal information</legend>
					<p className="contact__progress-indicator">
						<img src={step_5} alt="step indicator" />
					</p>
					<div className="contact__form-personal-wrapper">
						<input
							value={personlInfo.name}
							onChange={onChangeHandler}
							type="text"
							name="name"
							placeholder="Name"
							className="contact__form-personal"
							required
						/>

						<input
							value={personlInfo.company}
							onChange={onChangeHandler}
							type="text"
							name="company"
							placeholder="Company (optional)"
							className="contact__form-personal"
						/>
						<input
							value={personlInfo.email}
							onChange={onChangeHandler}
							type="email"
							name="email"
							placeholder="Email"
							className="contact__form-personal"
							required
						/>

						<input
							value={personlInfo.tel}
							onChange={onChangeHandler}
							type="tel"
							name="tel"
							placeholder="Phone Number"
							className="contact__form-personal"
							required
						/>

						<textarea
							value={personlInfo.message}
							onChange={onChangeHandler}
							type="text"
							name="message"
							placeholder="Enter message (optional)"
							className="contact__form-personal"
						/>
						<label
							className={`contact__form-personl-data-policy`.concat(
								personlInfo.data
									? " contact__form-personl-data-policy-accepted"
									: ""
							)}
						>
							<input
								checked={personlInfo.data}
								onChange={onDataChangeHandler}
								type="checkbox"
								name="data"
								className="contact__form-personal mr-3"
								required
							/>
							By submitting this form, you agree to the <a href="documents/Datenschutzerklärung_2022.pdf" className="contact__form-data-link ml-2" target="_blank">Privacy Policy</a>
						</label>
					</div>
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
					className={`contact__slider-nextBtn ${
						validateForm() ? " contact__slider-nextBtn-active" : ""
					}`}
					onClick={(e) =>
						submitDecorator(
							e,
							nextClickHandler,
							personlInfo,
							industries,
							values,
							interests
						)
					}
					type="submit"
				>
					Submit
				</button>
			</div>
		</div>
	);
}
