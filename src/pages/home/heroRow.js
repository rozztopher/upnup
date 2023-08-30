import torus from "../../images/torus.svg";
import { useEffect } from "react";
import GradientTitle from "../../componnents/gradientTitle";
import EnterExperienceButton from "../../componnents/EnterExperienceButton";
import { useRef } from "react";
export const isIosDevice = () => {
	return (
		[
			"iPad Simulator",
			"iPhone Simulator",
			"iPod Simulator",
			"iPad",
			"iPhone",
			"iPod",
		].some(e => navigator.userAgent.includes(e))
	);
};
export default function HeroRow({ progress, enterVR }) {
	let ref = useRef(null)
	useEffect(() => {
		const event = new Event("RowLoadingEvent");
		window.dispatchEvent(event);
		if(isIosDevice()){
			ref.current.style.display = 'none'
		}
	}, []);
	return (
		<div className={`home__hero-row`.concat(isIosDevice() ? ' home__hero-row-iso' : '')}>
			<div className="home__hero-column">
				<div className="home__hero-gtitle-container">
					<GradientTitle title="Let's shape the virtual future together!"></GradientTitle>
				</div>
				<h1 className="home__hero-title pt-3">
					We build Web3 solutions & 3D spaces in the Metaverse
				</h1>
				<p className="home__hero-text pt-3">
					Create your own immersive WebXR experience that people can access
					everywhere anytime - see for yourself!
				</p>
				{/* Todo connect the button */}
				<div className="home__hero-button pt-3">
					<EnterExperienceButton
						progress={progress}
						enterVR={enterVR}
					></EnterExperienceButton>
				</div>
			</div>
			<div className="home__hero-column home__hero-torus" ref={ref}>
				<div id="torus">
					{isIosDevice() ? (
						null
						// <img src={torus} width="100%" alt="geometric shape" height="100%" />
					) : (
						<canvas className="webgl"></canvas>
					)}
				</div>
			</div>
		</div>
	);
}
