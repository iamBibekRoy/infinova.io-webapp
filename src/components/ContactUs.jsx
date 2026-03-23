import React from "react";
import Title from "./Title";
import { ArrowRightIcon, MailIcon, UserRoundIcon } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
	const onSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		formData.append("access_key", "d975f57e-5521-4e6d-9167-22951ac95a0f");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();
			if (data.success) {
				toast.success("Thank you for your submission!");
				event.target.reset();
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ staggerChildren: 0.2 }}
			viewport={{ once: true }}
			id="contact-us"
			className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
			<Title
				title="Drop us Your Message"
				desc="Let's work together"
			/>

			{/* contact form */}
			<motion.form
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
				onSubmit={onSubmit}
				className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
				<div className="">
					<p className="mb-2 text-sm font-medium">Your Name</p>
					<div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
						<UserRoundIcon
							size={20}
							className="text-gray-600"
						/>
						<input
							name="name"
							type="text"
							placeholder="Enter your name"
							className="w-full p-3 text-sm outline-none"
							required
						/>
					</div>
				</div>

				<div className="">
					<p className="mb-2 text-sm font-medium">Email id</p>
					<div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
						<MailIcon
							size={20}
							className="text-gray-600"
						/>
						<input
							name="email"
							type="email"
							placeholder="Enter your email"
							className="w-full p-3 text-sm outline-none"
							required
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<p className="mb-2 text-sm font-medium">Message</p>
					<textarea
						rows={8}
						name="message"
						placeholder="Enter your message"
						className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-max text-sm flex items-center gap-2 bg-teal-500 hover:bg-linear-to-r hover:from-teal-600 hover:to-teal-400 text-white px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all duration-300">
					Submit <ArrowRightIcon size={18} />
				</button>
			</motion.form>
		</motion.div>
	);
};

export default ContactUs;
