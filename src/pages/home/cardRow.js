import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";
const CardRow = () => {
	return (
		<div className="home__card-row">
			<div className="home__card-column">
				<h2 className="home__card-title">
					Create spatial Web3 solutions with us.
				</h2>
			</div>
			<div className="home__card-column">
				<p className="home__card-text pt-3 pb-3">
					Upnup is the driving force in redesigning the digital world - we
					create unique experiences, form identities and shape new dimensions in
					the metaverse. We are always on the cutting edge and on the pulse of
					life. That's how we connect your business with Gen Z and bring it on
					the path to success.
				</p>
			</div>
			<div className="home__card-column">
				<Link className="home__card-anchor" to="/about">
					More About Us <img src={arrow} alt="arrow" className="pl-2" />
				</Link>
			</div>
		</div>
	);
};
export default CardRow;
