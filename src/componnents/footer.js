import React from "react";
import "../styles/footer.scss";
import upLogo from "../images/logo.svg";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__info-wrapper">
				<div className="footer__info h-padding">
					<div className="footer__info-upper-row">
						<div className="footer__info-upper-row-core">
							<img src={upLogo} alt="upnup logo"></img>
							<div className="footer__info-social-links">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.instagram.com/upnup.ch/"
									className="footer__info-social-links-item"
								>
									<img src={instagram} alt="instagram logo" />
									<span className="footer__span">Instagram</span>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/company/startupnup/"
									className="footer__info-social-links-item footer__info-social-links-linked"
								>
									<img src={linkedin} alt="linkedin logo" />
									<span className="footer__span">Linkedin</span>
								</a>
							</div>
						</div>
					</div>
					<div className="footer__info-middle-row">
						<h3 className="footer__company-title pb-3">Company</h3>
						<div className="footer__nav">
							<Link className="footer__nav-item pt-3" to="/about">
								About Us
							</Link>
							<Link className="footer__nav-item pt-3" to="/projects">
								Projects
							</Link>
							<Link className="footer__nav-item pt-3" to="/contact">
								Contact
							</Link>
							<Link className="footer__nav-item pt-3" to="/contact">
								Let's chat
							</Link>
						</div>
					</div>
					<div className="footer__info-lower-row">
						<h3 className="footer__company-title pb-3">Imprint</h3>
						<div className="footer__address">
							<p className="pt-3">Upnup Gmbh</p>
							<p className="pt-3">Geschäftsführer: Friedrich Gauss</p>
							<p className="pt-3">Bergstrasse 110,</p>
							<p className="pt-3">8032 Zurich, Switzerland</p>
							<p className="pt-3">
								<a href="mailto:hello@upnup.ch">
									hello@upnup.ch
								</a>
							</p>
							<p className="pt-3">
								<a href="tel:+41 44 244 02 44">
									+41 44 244 02 44
								</a>
							</p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="footer__rights-wrapper">
				<div className="footer__rights h-padding">
					<p className="footer__rights-text">© Upnup. All rights reserved</p>
					<p className="footer__rights-genz">
						Get in touch with the Metaverse and on the path of digital success
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
