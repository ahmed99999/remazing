import React from 'react';
import classes from './index.module.scss';

const SearchBar = ({ handelSearch }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <input
                className={`form-control mr-sm-2 ${classes.search__bar}`}
                placeholder="Search"
                onChange={(e) => handelSearch(e.currentTarget.value)}
            />
        </nav>
    );

}

export default SearchBar;