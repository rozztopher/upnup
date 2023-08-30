import React from "react";
import { Link } from "react-router-dom";
import step_6 from "../../images/step_6.svg";
export default function SubmitionSlide({ backToBegging }) {
	return (
		<div className="contact__slider-slide">
			<div className="contact__slide-fieldset">
				<div className="contact__slide-core">
					<div className="contact__slide-title">
						Thank you for your submission!
					</div>
					<p className="contact__progress-indicator">
						<img src={step_6} alt="step indicator" />
					</p>
					<div className="contact__form-personal-wrapper">
						<p>We’ll contact you as soon as possible.</p>
					</div>
				</div>
			</div>
			<div className="contact__slide-btn-container pt-3">
				<button
					className="contact__slider-prevBtn contact__slider-prevBtn-submit"
					type="submit"
					disabled
				>
					Previous Step
				</button>
				<Link
					to="/contact"
					className="contact__slider-nextBtn contact__slider-nextBtn-subimt"
					onClick={backToBegging}
				>
					Submit Another Proposal
				</Link>
			</div>
		</div>
	);
}
