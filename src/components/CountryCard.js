import React from "react";

const CountryCard = ({ country }) => {
	return (
		<div
			className="bg-white border-2 border-black p-4 flex items-center gap-4 transition-shadow"
			style={{ boxShadow: "8px 8px 0px #d1d5db" }}
		>
			{" "}
			<div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
				{country.flag ? (
					<img
						src={country.flag}
						alt={`${country.name} flag`}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="text-gray-400 text-3xl">🏞️</div>
				)}
			</div>
			<div>
				<h3 className="font-semibold text-gray-900 text-xl">
					{country.name}
				</h3>{" "}
				<p className="text-gray-600 text-base">{country.region}</p>{" "}
			</div>
		</div>
	);
};

export default CountryCard;
