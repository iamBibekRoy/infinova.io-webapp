import React from "react";
import { MagicCard } from "./ui/magic-card";

const ServiceCard = ({ service, index }) => {
	return (
		// <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10">
		// <div
		// 	className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-teal-300 via-cyan-400 to-teal-400 w-75 h-75 absolute z-0 transition-opacity duration-500 mix-blend-lighten`}
		// />
		// 	<div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
		// 		<div className="bg-gray-100 dark:bg-gray-700 rounded-full">
		// 			<div className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2 p-4">
		// 				{service.icon}
		// 			</div>
		// 		</div>

		// 		<div className="flex-1">
		// 			<h3 className="font-semibold">{service.title}</h3>
		// 			<p className="text-sm mt-2">{service.description}</p>
		// 		</div>
		// 	</div>
		// </div>

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
	);
};

export default ServiceCard;
