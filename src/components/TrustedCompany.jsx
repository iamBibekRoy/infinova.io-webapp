import React from "react";
import { motion } from "motion/react";

const TrustedCompany = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="font-semibold z-10">
				Trusted by Leading Companies
			</motion.h3>

			{/* compnay logos */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.1 }}
				viewport={{ once: true }}
				className=" flex items-center justify-center flex-wrap gap-10 m-4 z-10">
				<Image
					src="./images/microsoft_logo.png"
					alt="microsoft_logo"
				/>
				<Image
					src="./images/zoom_logo.png"
					alt="zoom_logo"
				/>
				<Image
					src="./images/rakuten_logo.png"
					alt="rakuten_logo"
				/>
				<Image
					src="./images/coinbase_logo.png"
					alt="coinbase_logo"
				/>
				<Image
					src="./images/airbnb_logo.svg"
					alt="airbnb_logo"
				/>
				<Image
					src="./images/google_logo.svg"
					alt="google_logo"
				/>
			</motion.div>
		</motion.div>
	);
};

const Image = ({ src, alt }) => (
	<motion.img
		variants={{
			hidden: { opacity: 0, y: 10 },
			visible: { opacity: 1, y: 0 },
		}}
		transition={{ duration: 0.4 }}
		src={src}
		alt={alt}
		className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
	/>
);

export default TrustedCompany;
