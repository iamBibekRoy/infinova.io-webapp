import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompany from "./components/TrustedCompany";
import Services from "./components/Services";
import OurWork from "./components/OurWork";

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
	);

	return (
		<div className="dark:bg-black relative">
			<Navbar
				theme={theme}
				setTheme={setTheme}
			/>

			<Hero />

			<TrustedCompany />

			<Services />

			<OurWork />
		</div>
	);
};

export default App;
