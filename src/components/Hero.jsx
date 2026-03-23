import React from "react";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<div
			id="hero"
			className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
			{/* people trusted banner section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.7 }}
				viewport={{ once: true }}
				className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
				<img
					src="./images/team-img.webp"
					alt="group_image"
					className="w-30 h-7"
				/>
				<p className="text-xs font-medium">Trusted by 11k+ people</p>
			</motion.div>

			{/* page header */}
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				viewport={{ once: true }}
				className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl z-5">
				Transforming ideas into{" "}
				<span className="bg-linear-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
					digital
				</span>{" "}
				excellence
			</motion.h1>

			{/* page description */}
			<motion.p
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1 }}
				viewport={{ once: true }}
				className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3 z-5">
				Innovate your brand with creative excellence. Let's shape your
				digital journey.
			</motion.p>

			{/* hero img section */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 2 }}
				viewport={{ once: true }}
				className="relative z-3">
				<img
					src="./images/hero-img.webp"
					alt="hero_img"
					className="w-full max-w-6xl rounded-3xl"
				/>

				<img
					src="./images/bg-gradient-1.webp"
					alt=""
					className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-5 blur-[2px] dark:blur-[6px] dark:brightness-80"
				/>
			</motion.div>
		</div>
	);
};

export default Hero;
