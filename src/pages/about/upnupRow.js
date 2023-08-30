import React from "react";
import GradientTitle from "../../componnents/gradientTitle";
import checkMark from "../../images/checkmark.svg";
import star from "../../images/star.svg";
export default function UpnupRow() {
	return (
		<div className="about__up-row">
			<div className="about__up-column">
				<GradientTitle title="ABOUT US"></GradientTitle>
			</div>
			<div className="about__up-column pt-3">
				<h1 className="about__up-title">
					We are the driving force in redesigning the spatial web
				</h1>
			</div>
			<div className="about__up-column pt-3">
				<p className="about__up-text">
					Upnup is the pionieer in the digital development and the driving force
					in redesigning the digital world we create unique experiences, form
					identities and shape new dimensions. We are always on the cutting edge
					and on the pulse of life. We are disruptive, curious and brave!
				</p>
				<p className="pt-3 about__up-text">
					This is how we bring companies in touch with generation Z and on the
					path to success. This is how we bring Europe back on the technological
					and communicative map, back in the competition of the tech industry.
				</p>
			</div>
			<div className="about__up-column pt-3">
				<div className="about__up-card">
					<h2 className="about__up-feature-title">
						<small>Our Traits</small>
						<small>
							<img className="pl-2 pt-1" src={star} alt="star logo" />
						</small>
					</h2>
					<div className="about__up-features-container">
						<div className="about__up-feature pt-3">
							<div className="about__up-feature-check">
								<img src={checkMark} alt="check mark logo" />
								<small className="pl-3">Unique Cutting Edge Technology</small>
							</div>
						</div>
						<div className="about__up-feature pt-3">
							<div className="about__up-feature-check">
								<img src={checkMark} alt="check mark logo" />
								<small className="pl-3">In-house Ecosystem</small>
							</div>
						</div>
						<div className="about__up-feature pt-3">
							<div className="about__up-feature-check">
								<img src={checkMark} alt="check mark logo" />
								<small className="pl-3">Web3 Native</small>
							</div>
						</div>
						<div className="about__up-feature pt-3">
							<div className="about__up-feature-check">
								<img src={checkMark} alt="check mark logo" />
								<small className="pl-3">Agile Workflows</small>
							</div>
						</div>
						<div className="about__up-feature pt-3">
							<div className="about__up-feature-check">
								<img src={checkMark} alt="check mark logo" />
								<small className="pl-3">Always Up To Date </small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
