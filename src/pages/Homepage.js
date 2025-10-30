import React, { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import CountryCard from "../components/CountryCard";
import FilterTabs from "../components/FilterTabs";
import Footer from "../components/Footer";

const HomePage = () => {
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [currentFilter, setCurrentFilter] = useState("All");
	const [displayCount, setDisplayCount] = useState(12);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchCountries();
	}, []);

	useEffect(() => {
		filterCountries();
	}, [currentFilter, countries]);

	const fetchCountries = async () => {
		try {
			const response = await fetch(
				"https://restcountries.com/v2/all?fields=name,region,flag"
			);
			const data = await response.json();
			setCountries(data);
			setFilteredCountries(data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching countries:", error);
			setLoading(false);
		}
	};

	const filterCountries = () => {
		if (currentFilter === "All") {
			setFilteredCountries(countries);
		} else {
			const filtered = countries.filter(
				(country) => country.region === currentFilter
			);
			setFilteredCountries(filtered);
		}
		setDisplayCount(12);
	};

	const loadMore = () => {
		setDisplayCount((prev) => prev + 12);
	};

	const displayedCountries = filteredCountries.slice(0, displayCount);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 py-8">
				<div className="flex justify-between items-center mb-16">
					<h3 className="text-xl md:text-2xl font-semibold text-gray-800">
						Countries
					</h3>
					<FilterTabs
						currentFilter={currentFilter}
						setCurrentFilter={setCurrentFilter}
					/>
				</div>

				<div className="relative flex justify-center mb-8">
					<h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-800 uppercase px-4 z-10 bg-white leading-tight">
						WELCOME
					</h2>
					<div
						className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#3D3D3D] z-0"
						style={{ marginRight: "2rem" }}
					></div>
					<div
						className="absolute bottom-0 right-0 left-1/2 h-0.5 bg-[#3D3D3D] z-0"
						style={{ marginLeft: "2rem" }}
					></div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					<div className="lg:col-span-2">
						<ImageSlider />
					</div>
					<div className="bg-[#F0F0F0] border-2 border-black h-[498px] flex items-center justify-center">
						<div className="flex flex-col items-center gap-2">
							<div className="w-8 h-8 bg-gray-400 rounded"></div>
							<div className="flex gap-2">
								<div className="w-6 h-6 bg-gray-400 rounded"></div>
								<div className="w-6 h-6 bg-gray-400 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>

				{loading ? (
					<div className="text-center py-12">
						Loading countries...
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
							{displayedCountries.map((country, index) => (
								<CountryCard key={index} country={country} />
							))}
						</div>

						{displayedCountries.length <
							filteredCountries.length && (
							<div className="text-center">
								<button
									onClick={loadMore}
									className="bg-gray-800 text-white px-6 py-2 hover:bg-gray-700 transition-colors"
								>
									Load more
								</button>
							</div>
						)}
					</>
				)}

				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
