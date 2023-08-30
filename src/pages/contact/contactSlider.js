import React from "react";
import { useState } from "react";
import { useRef } from "react";
import IndustarySlide from "./industarySlide";
import ValuesSlide from "./valuesSlide";
import InterestSlide from "./interestSlide";
import DoubleCheckSlide from "./doubleCheckSlide";
import FormSlide from "./formSlide";
import SubmitionSlide from "./submitionSlide";
export default function ContactSlider() {
	// reset the form via a switch
	const [resetTheForm, setResetTheForm] = useState(false);

	// grab the container to slide it
	const containerRef = useRef(null);

	// which industry have been choosen
	const [industries, setIndustries] = useState([]);

	// which value have been choosen
	const [values, setValues] = useState([]);

	// which service have been choosen
	const [interests, setInterests] = useState([]);

	const nextClickHandler = (step) => {
		let container = containerRef.current;
		container.style.transform = `translate(-${(step + 1) * 100}%)`;
	};
	const prevClickHandler = (step) => {
		let container = containerRef.current;
		container.style.transform = `translate(-${(step - 1) * 100}%)`;
	};
	const backToBegging = () => {
		// Baiscly this is reseting the form
		setIndustries([]);
		setResetTheForm(!resetTheForm);
		setValues([]);
		setInterests([]);
		let container = containerRef.current;
		container.style.transform = "translate(0%)";
	};
	return (
		<div className="contact__slider-wrapper">
			<form
				className="contact__slider-container"
				ref={containerRef}
				id="contact"
			>
				{/* Industary Slide */}
				<IndustarySlide
					resetTheForm={resetTheForm}
					nextClickHandler={nextClickHandler.bind(null, 0)}
					industries={industries}
					setIndustries={setIndustries}
				></IndustarySlide>
				{/* Values Slide */}
				<ValuesSlide
					resetTheForm={resetTheForm}
					nextClickHandler={nextClickHandler.bind(null, 1)}
					prevClickHandler={prevClickHandler.bind(null, 1)}
					values={values}
					setValues={setValues}
				></ValuesSlide>
				{/* Interest Slide */}
				<InterestSlide
					resetTheForm={resetTheForm}
					nextClickHandler={nextClickHandler.bind(null, 2)}
					prevClickHandler={prevClickHandler.bind(null, 2)}
					interests={interests}
					setInterests={setInterests}
				></InterestSlide>
				{/* 2x Check Slide */}
				<DoubleCheckSlide
					nextClickHandler={nextClickHandler.bind(null, 3)}
					prevClickHandler={prevClickHandler.bind(null, 3)}
					industries={industries}
					values={values}
					interests={interests}
				></DoubleCheckSlide>
				{/* Form Slide */}
				<FormSlide
					nextClickHandler={nextClickHandler.bind(null, 4)}
					prevClickHandler={prevClickHandler.bind(null, 4)}
					industries={industries}
					values={values}
					interests={interests}
				></FormSlide>
				<SubmitionSlide backToBegging={backToBegging}></SubmitionSlide>
			</form>
		</div>
	);
}
