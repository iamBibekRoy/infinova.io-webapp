import React, { useState } from "react";
import Title from "./Title";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const OurWork = () => {
	const [isOpen, setIsOpen] = useState(false);

	const workData = [
		{
			badge: "Branding",
			title: "EcoBrand - Green Initiative",
			desc: "Crafted a fresh brand identity and a responsive e-commerce platform for EcoBrand.",
			image: "../images/ecobrand-img.webp",
		},
		{
			badge: "Web Development",
			title: "TechFlow - Innovative Solutions",
			desc: "Implemented cutting-edge web development and digital marketing strategies for TechFlow.",
			image: "../images/techflow-img.webp",
		},
		{
			badge: "App Development",
			title: "UrbanFit - Fitness on the Go",
			desc: "Developed a user-friendly mobile app for UrbanFit that empowers users to track their fitness journey.",
			image: "../images/fitness-app-img.webp",
		},
		{
			badge: "Branding",
			title: "TechAI - A Digital Transformation",
			desc: "We elevated TechAI’s online presence through a seamless responsive website redesign.",
			image: "../images/techai-img.webp",
		},
		{
			badge: "Social Media Marketing",
			title: "Social Media Marketing Campaign",
			desc: "Executed an social media campaign involving a mix of influencer partnerships and user-generated content.",
			image: "../images/marketing-img.webp",
		},
	];

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ staggerChildren: 0.2 }}
			viewport={{ once: true }}
			id="our-work"
			className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
			<Title
				title="Our Successful Projects"
				desc="From concept to launch, explore the projects that define our passion for design, innovation, and performance."
			/>

			{/* our work cards section */}
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
				{(isOpen ? workData : workData.slice(0, 3)).map(
					(work, index) => (
						<motion.Card
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							key={index}
							className="relative mx-auto w-full max-w-sm pt-0 hover:scale-102 duration-500 transition-all cursor-pointer ring-0 bg-transparent">
							<div className="absolute inset-0 aspect-3/2" />
							<img
								src={work.image}
								alt="Event cover"
								className="relative aspect-3/2 w-full object-cover rounded-xl"
							/>
							<CardHeader>
								<Badge variant="secondary">{work.badge}</Badge>

								<CardTitle>{work.title}</CardTitle>
								<CardDescription className="opacity-80 dark:opacity-100">
									{work.desc}
								</CardDescription>
							</CardHeader>
						</motion.Card>
					),
				)}
			</div>
			<Button
				variant="outline"
				className="cursor-pointer px-3 py-4"
				onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? "Show Less" : "Show More"}
			</Button>
		</motion.div>
	);
};

export default OurWork;
