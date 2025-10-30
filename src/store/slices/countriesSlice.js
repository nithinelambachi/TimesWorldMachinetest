import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";



const initialState = {
	countries: [],
	currentFilter: "All",
	displayCount: 12,
	loading: false,
	error: null,
};

const countriesSlice = createSlice({
	name: "countries",
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.currentFilter = action.payload;
			state.displayCount = 12;
		},
		loadMore: (state) => {
			state.displayCount += 12;
		},
	},
});

export const { setFilter, loadMore } = countriesSlice.actions;
export default countriesSlice.reducer;

const selectCountries = (state) => state.countries.countries;
const selectCurrentFilter = (state) => state.countries.currentFilter;

export const selectFilteredCountries = createSelector(
	[selectCountries, selectCurrentFilter],
	(countries, currentFilter) => {
		if (currentFilter === "All") {
			return countries;
		}
		return countries.filter((country) => country.region === currentFilter);
	}
);

export const selectDisplayedCountries = createSelector(
	[selectFilteredCountries, (state) => state.countries.displayCount],
	(filteredCountries, displayCount) =>
		filteredCountries.slice(0, displayCount)
);
