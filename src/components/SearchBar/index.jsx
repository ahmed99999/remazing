import React from 'react';
import classes from './index.module.scss';

const SearchBar = ({ handelSearch }) => {
    return (
        <nav className={`navbar navbar-light bg-light ${classes.search__bar}`}>
            <span><h3>Your Brands</h3></span>
            <input
                className={`form-control mr-sm-2 ${classes.search__bar__input}`}
                placeholder="Search"
                onChange={(e) => handelSearch(e.currentTarget.value)}
            />
        </nav>
    );

}

export default SearchBar;