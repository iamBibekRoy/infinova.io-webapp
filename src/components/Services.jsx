import {
	AppWindowIcon,
	ChartNoAxesCombinedIcon,
	LayoutDashboardIcon,
	MegaphoneIcon,
	MonitorSmartphoneIcon,
	TwitterIcon,
} from "lucide-react";
import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
	const servicesData = [
		{
			title: "Brand Design",
			description:
				"Craft a unique identity with our creative brand design.",
			icon: (
				<LayoutDashboardIcon
					size={30}
					className="fill-teal-500 text-teal-500"
				/>
			),
		},
		{
			title: "Web Development",
			description:
				"Transform your vision into a stunning, user-friendly website.",
			icon: (
				<AppWindowIcon
					size={30}
					className="text-teal-500 "
				/>
			),
		},
		{
			title: "Search Engine Optimization",
			description:
				"Improve your visibility on Google and attract high-intent traffic.",
			icon: (
				<ChartNoAxesCombinedIcon
					size={30}
					className="text-teal-500 stroke-2"
				/>
			),
		},
		{
			title: "Digital Marketing",
			description:
				"Boost your online presence with strategic digital marketing.",
			icon: (
				<MegaphoneIcon
					size={30}
					className="text-teal-500"
				/>
			),
		},
		{
			title: "Social Media Marketing",
			description:
				"Build a strong brand presence and engage your audience.",
			icon: (
				<TwitterIcon
					size={30}
					className="fill-teal-500 text-teal-500"
				/>
			),
		},
		{
			title: "App Development",
			description:
				"Create engaging and intuitive apps tailored to your needs.",
			icon: (
				<MonitorSmartphoneIcon
					size={30}
					className="text-teal-500"
				/>
			),
		},
	];

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ staggerChildren: 0.2 }}
			viewport={{ once: true }}
			id="services"
			className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white z-2">
			<img
				src="./src/assets/bg-gradient-2.png"
				alt=""
				className="absolute -top-110 -left-70 -z-1 blur-xs dark:blur-3xl dark:brightness-40"
			/>

			<Title
				title="How can we help?"
				desc="From strategy to execution, we craft digital solutions that move your business forward."
			/>

			<div className="flex flex-col md:grid grid-cols-2">
				{servicesData.map((service, index) => (
					<ServiceCard
						key={index}
						service={service}
						index={index}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default Services;
