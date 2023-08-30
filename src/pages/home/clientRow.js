import React from "react";
import { Link } from "react-router-dom";
import GradientTitle from "../../componnents/gradientTitle";
import medium from "../../images/medium.svg";
import discord from "../../images/discord.svg";
import boowly from "../../images/boowly.svg";
import fox_deal from "../../images/fox_deal.svg";
import spayce from "../../images/spayce.svg";
import tinder from "../../images/tinder.svg";
import stay_human from "../../images/stay_human.svg";

export default function ClientRow() {
	return (
		<div className="home__client-row">
			<div className="home__client-column">
				<GradientTitle title="CLIENTS"></GradientTitle>
			</div>
			<div className="home__client-column pt-2">
				<h2 className="home__client-title">Pleasure to work with</h2>
			</div>
			<div className="home__client-list pt-5">
				<div className="home__client-logos mb-2 mr-md-2">
					<img src={medium} alt="Medium logo" />
				</div>
				<div className="home__client-logos mb-2 mr-md-2">
					<img src={discord} alt="Discord logo" />
				</div>
				<div className="home__client-logos mb-2 mr-md-2">
					<img src={boowly} alt="Boowly logo" />
				</div>
				<div className=" home__client-hidden home__client-logos mb-2 mr-md-2">
					<img src={fox_deal} alt="Fox Deal logo" />
				</div>
				<div className=" home__client-hidden home__client-logos mb-2 mr-md-2">
					<img src={spayce} alt="Spayce logo" />
				</div>
				<div className=" home__client-hidden home__client-logos mb-2 mr-md-2">
					<img src={tinder} alt="Tinder Logo" />
				</div>
				<div className=" home__client-hidden home__client-logos mb-2 mr-md-2">
					<img src={stay_human} alt="Stay Human logo" />
				</div>
				<div className="mb-2 home__client-add">
					<Link to="/contact">Want to be here?</Link>
				</div>
			</div>
		</div>
	);
}
