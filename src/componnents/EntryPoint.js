import React, { useEffect } from 'react'
import NavigationBar from './../componnents/NavigationBar'
import FoxDeal from '../assets/svg/foxdeal.svg';
import Spayce from '../assets/svg/spayce.svg';
import StayHuman from '../assets/svg/stayhuman.svg';
import Upnup from '../assets/svg/upnup.svg';
import HOLOSCREEN from './HoloScreen';

const EntryPoint = (props) => {
    useEffect(() => {
        var modal = document.getElementById("holoModal");
            
        return props.name === "You" ? modal.style.display = "block" : ""

    })
    return (
        <>
            <NavigationBar></NavigationBar>

            <div className={`${props.name === "Work" ? "whole-container-work" : "whole-container"}`}   >

                <video loop autoPlay muted className='entry-video full-screen' src={props.video} poster="/images/night.jpg">

                </video>

                <div className='screen full-screen'>

                </div>
                {
                    props.name === "About us" ?
                        <div className="about-us-container">

                            <div className="about-us-content">
                                <div className='about-entry-content' style={{ color: props.fontColour }}>
                                    <h2 >{props.name}</h2>
                                    <div className="mobile-p" dangerouslySetInnerHTML={{ __html: props.text }}>
                                    </div>
                                </div>
                                {window.innerWidth > 480 &&
                                    <>
                                <div className="about-our-services">
                                    <h3>Our Services</h3>
                                    <ul className="branding">
                                        <li>Branding</li>
                                        <ul className="removed-sub-bullets">
                                            <li>Corporate Branding</li>
                                            <li>Personal Branding</li>
                                            <li>Product Branding</li>
                                        </ul>
                                    </ul>
                                    <ul className="immersive-design">
                                        <li>Immersive Design and Development</li>
                                        <ul className="removed-sub-bullets">
                                            <li>3D Product Creation</li>
                                            <li>Immersive Web Apps</li>
                                            <li>VR & AR</li>

                                        </ul>
                                    </ul>
                                    <ul className="consulting">
                                        <li>Consulting </li>
                                        <ul className="removed-sub-bullets">
                                            <li>Augmented Productivity</li>
                                            <li>Experience Marketing</li>
                                            <li>Immersive Tech</li>
                                        </ul>
                                    </ul>

                                </div>
                                    </>
                                }

                            </div>

                        </div>

                        : ""
                }

                {
                    props.name === "Work" ?
                        <div className="work">
                            <h3>{props.title}</h3>
                            <div class="grid">
                                <div>
                                    <img src={FoxDeal} alt="FoxDeal" />
                                </div>
                                <div>
                                    <img src={Spayce} alt="Spayce" />
                                </div>
                                <div>
                                    <img src={StayHuman} alt="StayHuman" />
                                </div>
                                <div>
                                    <img className="upnup-logo" src={Upnup} alt="Upnup" />
                                </div>
                            </div>
                        </div> : ""
                }
                {
                    props.name === "You" ? <HOLOSCREEN tvScreen="TV" status="You" services="services" ></HOLOSCREEN> : ""
                }


                <div className={"gradient-button gradient-button-color" } onClick={props.enterVR}> {props.cta}</div>

               

                {
                    props.name === "Contact" ?
                        <div className="contact-content">
                            <h3>{props.title}</h3>
                            <div class="card has-text-centered is-wide">

                                <div class="card-content">
                                    <p>
                                        Email: hello@upnup.com<br /><br />
                                        Phone: +41 44 244 02 44<br /><br />
                                        Address: Bergstrasse 110,8032 Zurich, Switzerland
                                    </p>
                                </div>
                            </div>
                        </div>
                        : ""
                }
            

            </div>
        </>
    )
}

export default EntryPoint