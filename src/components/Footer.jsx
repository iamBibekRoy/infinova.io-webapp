import React from "react";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
			{/* footer top section */}
			<div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
				{/* top-left section */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
					<img
						src={
							theme === "dark" ?
								"./images/infinova-logo-dark.png"
							:	"./images/infinova-logo.png"
						}
						alt=""
						className="w-32 sm:w-44"
					/>
					<p className="max-w-md ">
						Ready to elevate your brand? Partner with infinova,io
						and take the first step towards transforming your
						digital presence.
					</p>

					<ul className="flex gap-8">
						<li>
							<a
								href="#hero"
								className="hover:text-teal-500">
								Home
							</a>
						</li>
						<li>
							<a
								href="#services"
								className="hover:text-teal-500">
								Services
							</a>
						</li>
						<li>
							<a
								href="#our-work"
								className="hover:text-teal-500">
								Our Work
							</a>
						</li>
						<li>
							<a
								href="#contact-us"
								className="hover:text-teal-500">
								Contact Us
							</a>
						</li>
					</ul>
				</motion.div>

				{/* top-right section */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-gray-600 dark:text-gray-400">
					<h3 className="font-semibold">
						Subscribe to our newsletter
					</h3>
					<p className="text-sm mt-2 mb-6">
						The latest news, articles and resources sent to your
						inbox weekly.
					</p>

					<div className="flex gap-2 text-sm">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
						/>

						<button className="bg-teal-500 text-white rounded cursor-pointer w-40 hover:text-[15px] transition-all duration-100">
							Subscribe
						</button>
					</div>
				</motion.div>
			</div>

			<hr className="border-gray-300 dark:border-gray-600 my-6" />

			{/* footer bottom section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
				className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
				<p>Copyright 2026 © infinova.io - All Right Reserved.</p>

				<div className="flex items-center justify-between gap-4">
					<img
						src="../images/facebook_icon.svg"
						alt="facebook-icon"
						className="cursor-pointer hover:brightness-50 dark:hover:brightness-150"
					/>
					<img
						src="../images/twitter_icon.svg"
						alt="twitter-icon"
						className="cursor-pointer hover:brightness-50 dark:hover:brightness-150"
					/>
					<img
						src="../images/instagram_icon.svg"
						alt="instagram-icon"
						className="cursor-pointer hover:brightness-50 dark:hover:brightness-150"
					/>
					<img
						src="../images/linkedin_icon.svg"
						alt="linkedin-icon"
						className="cursor-pointer hover:brightness-50 dark:hover:brightness-150"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Footer;
