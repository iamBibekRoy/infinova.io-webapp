import { ArrowRightIcon, TextAlignEndIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
	const [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
			{/* navbar logo */}
			<a href="#">
				<img
					src={
						theme === "dark" ?
							"./images/infinova-logo-dark.webp"
						:	"./images/infinova-logo.webp"
					}
					alt="nav-logo"
					className="w-32 sm:w-40 cursor-pointer"
				/>
			</a>
			{/* navbar logo */}

			{/* nav menu and sidebar section */}
			<div
				className={`text-gray-700/80 dark:text-white sm:text-sm ${!sideBarOpen ? "max-md:w-0 overflow-hidden" : "max-md:w-60 max-md:pl-10 z-50"} max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-teal-500 dark:max-md:bg-teal-600 max-md:text-white max-md:pt-20 flex md:items-center gap-5 transition-all py-0.75`}>
				{/* sidebar close/cross icon/btn */}
				<XIcon
					size={28}
					className="absolute right-4 top-4 md:hidden"
					onClick={() => setSideBarOpen(false)}
				/>

				{/* nav menu items */}
				<NavLink
					href="#"
					onClick={() => setSideBarOpen(false)}>
					Home
				</NavLink>
				<NavLink
					href="#services"
					onClick={() => setSideBarOpen(false)}>
					Services
				</NavLink>
				<NavLink
					href="#our-work"
					onClick={() => setSideBarOpen(false)}>
					Our Work
				</NavLink>
				<NavLink
					href="#contact-us"
					onClick={() => setSideBarOpen(false)}>
					Contact Us
				</NavLink>
			</div>
			{/* nav menu and sidebar section */}

			{/* nav btns section */}
			<div className="flex items-center gap-2 sm:gap-4">
				{/* dark/light mode toggle btn */}
				<ThemeToggleBtn
					theme={theme}
					setTheme={setTheme}
				/>

				{/* sidebar open icon/btn */}
				<TextAlignEndIcon
					size={26}
					className="md:hidden text-black dark:text-white"
					onClick={() => setSideBarOpen(true)}
				/>

				{/* connect btn */}
				<a
					href="#contact-us"
					className="text-sm max-md:hidden flex items-center gap-1 bg-teal-500 hover:bg-linear-to-r hover:from-teal-600 hover:to-teal-400 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-colors duration-300">
					Connect
					<ArrowRightIcon size={18} />
				</a>
			</div>
			{/* nav buttons section */}
		</motion.div>
	);
};

// custom navbar menu items navlink
const NavLink = ({ href, children, onClick }) => (
	<a
		href={href}
		className="relative hover:text-teal-500 dark:hover:text-teal-300 group transition duration-300 font-semibold"
		onClick={onClick}>
		{children}
		<span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
	</a>
);

export default Navbar;
