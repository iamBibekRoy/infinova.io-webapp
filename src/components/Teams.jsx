import React from "react";
import Title from "./Title";
import { motion } from "motion/react";

const Teams = () => {
	const teamData = [
		{
			name: "Jose Ruiz",
			title: "CEO & founder",
			image: "../src/assets/teams/team-01.jpg",
		},
		{
			name: "Robin Wright",
			title: "Project Manager",
			image: "../src/assets/teams/team-02.jpg",
		},
		{
			name: "Jannie Barnett",
			title: "Vice president",
			image: "../src/assets/teams/team-03.jpg",
		},
		{
			name: "Lonnie Elliot",
			title: "SEO specialist",
			image: "../src/assets/teams/team-04.jpg",
		},
		{
			name: "Jamie Ferguson",
			title: "Web developer",
			image: "../src/assets/teams/team-05.jpg",
		},
		{
			name: "Randall Hill",
			title: "App developer",
			image: "../src/assets/teams/team-06.jpg",
		},
		{
			name: "Ian Holmes",
			title: "Graphic designer",
			image: "../src/assets/teams/team-07.jpg",
		},
		{
			name: "Violet Burke",
			title: "Social media strategist",
			image: "../src/assets/teams/team-08.jpg",
		},
	];

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
			<Title
				title="Meet our team"
				desc="A passionate team of digital experts dedicated to your brands success."
			/>

			{/* teams card section */}
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
				{teamData.map((team, index) => (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						viewport={{ once: true }}
						key={index}
						className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400 cursor-default">
						<img
							src={team.image}
							alt=""
							className="w-12 h-12 rounded-full"
						/>

						<div className="flex-1">
							<h3 className="font-bold text-sm">{team.name}</h3>
							<p className="text-xs opacity-60">{team.title}</p>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Teams;
