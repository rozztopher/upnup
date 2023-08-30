import React,{useState,useEffect,useRef} from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import gsap from "gsap";
import Nav from "./componnents/Nav";
import Footer from "./componnents/footer";
const About = React.lazy(() => import("./pages/about/About"));
const Work = React.lazy(() => import("./pages/projects/Projects"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Home = React.lazy(() => import("./pages/home/Home"));

const audio = new Audio("/audio/dark-cyberpunk-background.mp3");
audio.volume = 0.1;
audio.loop = true;

function AppContainer() {
	const enterVR = () => {
		if (progress === 100) {
			document.getElementById("app-container").style.display = "none";
			document.getElementById("vr-container").style.display = "block";
			gsap.timeline().to("#vr-container", { duration: 1, autoAlpha: 1 });
			audio.play();
		}
	};
	const exitVR = () => {
		document.getElementById("vr-container").style.display = "none";
		document.getElementById("app-container").style.display = "block";
		gsap.timeline().to("#vr-container", { duration: 1, autoAlpha: 0 });
		audio.pause();
	};
	function useInterval(callback, delay) {
		const savedCallback = useRef();
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);
		useEffect(() => {
			let id = setInterval(() => {
				savedCallback.current();
			}, delay);
			return () => {
				clearInterval(id);
			};
		}, [delay]);
	}
	const [progress, setProgress] = useState(0);
	const [vrLoaded, setVRLoaded] = useState(false);
	useEffect(() => {
		window.addEventListener(
			"AssetsLoaded",
			function (evt) {
				setVRLoaded(true);
			},
			false
		);
		window.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				exitVR();
			}
		});
	}, []);
	useInterval(() => {
		if (progress < 90 && !vrLoaded) {
			setProgress(progress + 0.04);
		} else if (vrLoaded) {
			setProgress(100);
		}
	}, 5);
	return (
		<React.Suspense fallback={<div></div>}>
			<div className="app-container" id="app-container">
				<Switch>
					<Nav></Nav>
					<Route exact path="/">
						<Home progress={progress} enterVR={enterVR}/>
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/projects">
						<Work />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Footer></Footer>
				</Switch>
			</div>
		</React.Suspense>
	);
}

export default AppContainer;
