import React from "react";
import GradientTitle from "../../componnents/gradientTitle";

import point from "../../images/point.svg";
import branding from "../../images/branding.svg";
import dNd from "../../images/dnd.svg";
import consulting from "../../images/consulting.svg";
export default function ServiceRow() {
	return (
		<div className="about__service-row">
			<div className="about__service-column">
				<GradientTitle title="SEVICES"></GradientTitle>
			</div>
			<div className="about__service-column pt-3">
				<h2 className="about__service-title">What we do</h2>
			</div>
			<div className="about__service-column pt-3 pt-md-4">
				<div className="about__service-widget">
					<p>
						<img src={branding} alt="Branding logo" />
					</p>
					<p className="about__service-type pt-2 pt-md-4">Branding</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Corporate Branding</small>
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Personal Branding</small>
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Product Branding</small>
					</p>
				</div>
				<div className="about__service-widget">
					<p>
						<img src={dNd} alt="Design logo" />
					</p>
					<p className="about__service-type pt-2 pt-md-4">
						Immersive Design and Development
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Web3 Apps</small>
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Virtual Stores (Metaverse Shopping)</small>
						
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Virtual Galleries </small>
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">NFT Creation</small>
					</p>
				</div>
				<div className="about__service-widget">
					<p>
						<img src={consulting} alt="Consulting logo" />
					</p>
					<p className="about__service-type pt-2 pt-md-4">Consulting</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Augmented Productivity</small>
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">NFT Consulting</small>
					</p>
					<p className="about__service-item pt-2">
						<img src={point} alt="a Point logo" />
						<small className="pl-3">Immersive Tech</small>
					</p>
				</div>
			</div>
		</div>
	);
}
