import React from "react";
import { MagicCard } from "./ui/magic-card";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: index * 0.2 }}
			viewport={{ once: true }}
			className="">
			<MagicCard className="max-w-lg m-2 sm:m-4 rounded-xl shadow-2xl shadow-gray-100 dark:shadow-white/10">
				<div className="flex items-center gap-10 p-8 transition-all bg-white dark:bg-gray-900 rounded-xl">
					<div className="bg-gray-100 dark:bg-gray-700 rounded-full">
						<div className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2 p-4">
							{service.icon}
						</div>
					</div>

					<div className="flex-1">
						<h3 className="font-semibold">{service.title}</h3>
						<p className="text-sm mt-2">{service.description}</p>
					</div>
				</div>
			</MagicCard>
		</motion.div>
	);
};

export default ServiceCard;
