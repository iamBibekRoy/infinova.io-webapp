import { MoonIcon, SunIcon } from "lucide-react";
import React, { useEffect } from "react";

const ThemeToggleBtn = ({ theme, setTheme }) => {
	// useEffect(() => {
	// 	const prefersDarkMode = window.matchMedia(
	// 		"(prefers-color-scheme: dark)",
	// 	).matches;

	// 	setTheme(theme || prefersDarkMode ? "dark" : "light");
	// }, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<>
			<button
				className="relative flex items-center justify-center h-8 w-8 cursor-pointer border border-gray-500 rounded-full"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
				<SunIcon
					size={30}
					className={`absolute p-1.25 text-white transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"}`}
				/>
				<MoonIcon
					size={30}
					className={`absolute p-1.25 text-black transition-all duration-300 ${theme === "dark" ? "-rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
				/>
			</button>
		</>
	);
};

export default ThemeToggleBtn;
