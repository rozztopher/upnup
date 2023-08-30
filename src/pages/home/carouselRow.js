import React from "react";
import { Link } from "react-router-dom";
import GradientTitle from "../../componnents/gradientTitle";

export default function CarouselRow() {
	let images = [
		"images/foxDeal",
		"images/spayce",
		"images/stayhuman",
		"images/coin",
	];
	return (
		<div className="home__carousel-row">
			<div className="home__carousel-column">
				<GradientTitle
					title="PROJECTS"
					style={{ textAlign: "left" }}
				></GradientTitle>
			</div>
			<div className="home__carousel-column pt-2">
				<h2 className="home__carousel-title">Latest Creations</h2>
				<Link
					to="/projects"
					className="home__carousel-btn home__carousel-tablet-btn"
				>
					View All Projects
				</Link>
			</div>
			<div className="home__carousel-container">
				<div className="home__carousel-images">
					{images.map((image, i) => {
						return (
							<div className="home__carousel-image-container pl-2 pr-2" key={i}>
								<img
									src={`${image}_desktop.jpg`}
									alt="Recent Projects"
									className="home__carousel-image"
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="home__carousel-column home__carousel-column-mobile-only pt-5">
				<Link
					className="home__carousel-btn home__carousel-mobile-btn"
					to="/projects"
				>
					View All Projects
				</Link>
			</div>
		</div>
	);
}
