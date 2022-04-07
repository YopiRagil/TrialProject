import React from "react";
import "./App.css";
import MainRoutes from "./Routes";
import axios from "axios";

function HomePage() {
	return (
		<React.Fragment>
			<div className="bg-gray-200 min-h-screen">
				<MainRoutes />
			</div>
		</React.Fragment>
	);
}

export default HomePage;
