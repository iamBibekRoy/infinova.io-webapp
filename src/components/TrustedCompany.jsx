import React from "react";

const TrustedCompany = () => {
	return (
		<div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
			<h3 className="font-semibold z-10">Trusted by Leading Companies</h3>

			<div className=" flex items-center justify-center flex-wrap gap-10 m-4 z-10">
				<Image
					src="./src/assets/microsoft_logo.png"
					alt="microsoft_logo"
				/>
				<Image
					src="./src/assets/zoom_logo.png"
					alt="zoom_logo"
				/>
				<Image
					src="./src/assets/rakuten_logo.png"
					alt="rakuten_logo"
				/>
				<Image
					src="./src/assets/coinbase_logo.png"
					alt="coinbase_logo"
				/>
				<Image
					src="./src/assets/airbnb_logo.svg"
					alt="airbnb_logo"
				/>
				<Image
					src="./src/assets/google_logo.svg"
					alt="google_logo"
				/>
			</div>
		</div>
	);
};

const Image = ({ src, alt }) => (
	<img
		src={src}
		alt={alt}
		className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
	/>
);

export default TrustedCompany;
