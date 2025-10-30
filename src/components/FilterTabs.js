import React from "react";

const FilterTabs = ({ currentFilter, setCurrentFilter }) => {
	const filters = ["All", "Asia", "Europe"];

	return (
		<div className="mb-6">
			<div className="flex gap-4">
				{filters.map((filter) => (
					<button
						key={filter}
						onClick={() => setCurrentFilter(filter)}
						className={`pb-2 px-1 relative ${
							currentFilter === filter
								? "text-gray-900 font-medium"
								: "text-gray-500"
						}`}
					>
						{filter}
						{currentFilter === filter && (
							<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default FilterTabs;
