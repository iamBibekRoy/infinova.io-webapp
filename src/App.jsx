import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompany from "./components/TrustedCompany";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
	);

	return (
		<div className="dark:bg-black relative selection:bg-teal-400 selection:text-black">
			<Toaster />

			<Navbar
				theme={theme}
				setTheme={setTheme}
			/>

			<Hero />

			<TrustedCompany />

			<Services />

			<OurWork />

			<Teams />

			<ContactUs />

			<Footer theme={theme} />
		</div>
	);
};

export default App;
