import React from 'react';
import './SearchBar.css';

var SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="search__container">
		    <input
		    className="search__input search"
		    type="text"
		    placeholder="Search"
		    onChange={searchChange} />
		</div>
	)
}

export default SearchBox;