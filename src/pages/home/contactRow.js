import React from "react";
import { a } from "react-router-dom";
import GradientTitle from "../../componnents/gradientTitle";
import GradientButton from "../../componnents/gradientButton";
import address from "../../images/address.svg";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";

export default function ContactRow() {
	return (
		<div className="home__contact-row">
			<div className="home__contact-column">
				<div className="home__contact-gradient-wrapper">
					<GradientTitle title="CONTACT"></GradientTitle>
				</div>
				<div className="home__contact-title-wrapper">
					<h2 className="home__contact-title pt-2">
						Let's transform your brand togehter!
					</h2>
				</div>
				<div className="home__contact-text-wrapper">
					<p className="home__contact-text pt-3 pb-3">
						Our disprutive Thinkers & Makers help you to transform your business
						into the Web3. Let's have a non-binding first chat together!
					</p>
				</div>
				<div className="home__contact-btn-wrapper">
					<GradientButton title="Let's chat" url="/contact"></GradientButton>
				</div>
			</div>
			<div className="home__contact-column pt-3">
				<a className="home__contact-field mt-3" href="mailto:hello@upnup.ch" >
					<img src={email} alt="email" width="100px" />
					<p className="pl-3 pl-md-0 pt-md-5 mt-md-5 home__contact-field-address">Email</p>
					<p className="pl-3 home__contact-auto-margin pl-md-0 pt-md-4">
						hello@upnup.ch
					</p>
				</a>
				<a className="home__contact-field mt-3" href="tel:+41 44 244 02 44">
					<img src={phone} alt="phone" width="100px" />
					<p className="pl-3 pl-md-0 pt-md-5 mt-md-5 home__contact-field-address">Phone</p>
					<p className="pl-3 home__contact-auto-margin pl-md-0 pt-md-4">
						+41 44 244 02 44
					</p>
				</a>
				<a className="home__contact-field mt-3"  href="https://www.google.com/maps/place/Bergstrasse+110,+8032+Z%C3%BCrich/@47.3689995,8.561319,1185m/data=!3m1!1e3!4m5!3m4!1s0x479aa0b5e9dda165:0xb73741af79d8c849!8m2!3d47.3690358!4d8.5640158">
					<img src={address} alt="Address" width="100px" />
					<p className="pl-3 pl-md-0 pt-md-5 mt-md-5 home__contact-field-address">Address</p>
					<p className="pl-3 home__contact-auto-margin pl-md-0 pt-md-4">
						Bergstrasse 110
					</p>
					<p className="pl-3 home__contact-auto-margin pl-md-0 pt-md-4">
						8032 Zurich Switzerland
					</p>
				</a>
			</div>
		</div>
	);
}
