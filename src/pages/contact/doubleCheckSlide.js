import React from "react";
import point from "../../images/point.svg";
import step_4 from "../../images/step_4.svg";
export default function DoubleCheckSlide({
	nextClickHandler,
	prevClickHandler,
	industries,
	values,
	interests,
}) {
	return (
		<div className="contact__slider-slide contact__slide-slide-reset">
			<fieldset className="contact__slide-fieldset">
				<div className="contact__slide-core ">
					<legend className="contact__slide-title">Let’s double check</legend>
					<p className="contact__progress-indicator">
						<img src={step_4} alt="step indicator" />
					</p>
					<p className="contact__double-check-text">
						Are you sure you filled in everything correctly? Now is your chance
						to correct or even reconsider your entry. Afterwards we need some
						personal information from you which we will of course treat
						confidentially. <small>Thank you for your honesty!</small>
					</p>
					<div className="contact__double-check-field">
						<p className="contact__double-check-text">Industry</p>
						{industries.map((i) => (
							<p key={i}>
								<img src={point} alt="point logo" className="pb-1 pr-2"></img>
								{i}
							</p>
						))}
					</div>
					<div className="contact__double-check-field">
						<p className="contact__double-check-text">Values</p>
						{values.map((v) => (
							<p key={v}>
								<img src={point} alt="point logo" className="pb-1 pr-2"></img>
								{v}
							</p>
						))}
					</div>
					<div className="contact__double-check-field">
						<p className="contact__double-check-text">Services</p>
						{interests.map((s) => (
							<p key={s}>
								<img src={point} alt="point logo" className="pb-1 pr-2"></img>
								{s}
							</p>
						))}
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
					className="contact__slider-nextBtn contact__slider-nextBtn-active"
					onClick={nextClickHandler}
					type="button"
				>
					Next Step
				</button>
			</div>
		</div>
	);
}
