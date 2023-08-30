import React from "react";
import HeroRow from "./heroRow";
import CardRow from "./cardRow";
import CarouselRow from "./carouselRow";
import ContactRow from "./contactRow";
import ServiceRow from '../about/serviceRow'
const Home = ({progress,enterVR}) => {
	return (
		<div className="home-container h-padding">
			<HeroRow progress={progress} enterVR={enterVR}></HeroRow>
			<CardRow></CardRow>
			<ServiceRow></ServiceRow>
			<CarouselRow></CarouselRow>
			<ContactRow></ContactRow>
		</div>
	);
};

export default Home;
