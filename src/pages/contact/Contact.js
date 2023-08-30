import React from "react";
import GradientTitle from "../../componnents/gradientTitle";
import ContactSlider from "./contactSlider";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import address from "../../images/address.svg";

const Contact = () => {
	return (
		<div className="contact-container h-padding">
			
			<div className="contact__slider-row">
				<ContactSlider></ContactSlider>
			</div>
			<div className="contact__discuss-row">
				<div className="contact__discuss-column">
					<GradientTitle title="CONTACT"></GradientTitle>
				</div>
				<div className="contact__discuss-column pt-3">
					<h2 className="contact__discuss-title">
						Let's discuss your project!
					</h2>
				</div>
				<div className="contact__discuss-column pt-3">
					<div className="contact__discuss-field">
						<div className="contact__email-field">
							<img src={email} alt="email logo" />
							<div className="pt-md-3">
								<p className="contact__field-title">Email:</p>
								<p>hello@upnup.ch</p>
							</div>
						</div>
						<div className="contact__phone-field">
							<img src={phone} alt="email logo" />
							<div className="pt-md-3">
								<p className="contact__field-title">Phone:</p>
								<p>+41 44 244 02 44</p>
							</div>
						</div>
						<div className="contact__address-field">
							<img src={address} alt="email logo" />
							<div className="pt-md-3">
								<p className="contact__field-title">Address:</p>
								<p>Bergstrasse 110, 8032</p>
								<p> Zurich, Switzerland</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
