import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import "./searchBar.scss";

SearchBar.propTypes = {
	handleSearchValue: PropTypes.func,
};

function SearchBar({ handleSearchValue }) {
	const [value, setValue] = useState();
	const debounce = (func, timeout = 300) => {
		let timer;
		clearTimeout(timer);
		timer = setTimeout(func, timeout);
	};
	const handleSearchTyping = (e) => {
		e.preventDefault();
		const searchValue = e?.target.value;

		if (handleSearchValue) {
			handleSearchValue(searchValue);
			setValue(searchValue);
		}
	};

	const handleSearchEnter = (e) => {
		if (e.key === "Enter") {
			const searchValue = e?.target.value;
			if (handleSearchValue) {
				handleSearchValue(searchValue);
			}
		}
	};

	const handleSearchButton = () => {
		if (handleSearchValue) {
			handleSearchValue(value);
			console.log(value);
		}
	};
	// const handleDebounceChange = useCallback(
	// 	debounce(() => handleSearch(), 3000),
	// 	[]
	// );

	return (
		<div className='searchBar'>
			<input
				type='text'
				placeholder='Enter drink name you want'
				onChange={handleSearchTyping}
				onKeyDown={handleSearchEnter}
			/>
			<button onClick={handleSearchButton}>Search</button>
		</div>
	);
}

export default SearchBar;
