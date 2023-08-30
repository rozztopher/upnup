import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./AppContainer";

const Scene = React.lazy(() => import("./vr/Scene"));

function App() {
	sessionStorage.setItem("room", "home");

	return (
		<div className="app">
			<Router>
				<React.Suspense fallback={null}>
					<Scene />
				</React.Suspense>
				<AppContainer />
			</Router>
		</div>
	);
}

export default App;
