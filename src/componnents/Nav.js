import React, { useRef, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "../images/logo.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";

const Nav = () => {
	let [isMenuOpen, setIsMenuOpen] = useState(false);
	// Grab the menu bars to animate them
	let [upperBarRef, bottomBarRef] = [useRef(null), useRef(null)];

	const clickHandler = (e) => {
		upperBarRef.current.classList.toggle("BarUp_transform");
		bottomBarRef.current.classList.toggle("BarDown_transform");
		setIsMenuOpen(!isMenuOpen);
	};
	let menuClasses = ["Header-Menu", "Header-Menu_closed"];
	if (isMenuOpen) {
		menuClasses.pop();
	}
	menuClasses = menuClasses.join(" ");
	let activeStyle = { borderLeft: "2px solid white" };

	return (
		<div className="nav-container">
			<nav className="Header">
				{/* this is the logo Row */}
				<div className="Header-LogoRow">
					<Link to="/">
						<img src={logo} alt="Upnup logo"></img>
					</Link>
					<div className="Header-MenuButton" onClick={clickHandler}>
						<div ref={upperBarRef} className="Bar BarUp"></div>
						<div ref={bottomBarRef} className="Bar BarDown"></div>
					</div>
				</div>
				<div className={menuClasses}>
					{/* this is the Navigation Menu */}
					<div className="Header-Nav">
						<ul className="Header-Nav_list">
							<li className="Header-Nav_listItem">
								<NavLink
									className="Header-Nav_listLink"
									to="/about"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									About Us
								</NavLink>
							</li>
							<li className="Header-Nav_listItem">
								<NavLink
									className="Header-Nav_listLink"
									to="/projects"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Projects
								</NavLink>
							</li>
							<li className="Header-Nav_listItem">
								<NavLink
									className="Header-Nav_listLink"
									to="/contact"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
					{/* this is the Social Media Icons */}
					<div className="Header-Social">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/upnup.ch/"
							className="Header-SocialIcon"
						>
							<img src={instagram} alt="Instagram Logo" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/company/startupnup/"
							className="Header-SocialIcon"
						>
							<img src={linkedin} alt="Linkedin Logo" />
						</a>
					</div>
					{/* this is the Lower Button */}
					<Link to="/contact" className="Header-Button">
						Let's chat
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
