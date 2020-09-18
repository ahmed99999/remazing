import React from 'react';
import classes from './index.module.scss';

const SearchBar = ({ handelSearch, setShape }) => {
    return (
        <nav className={`navbar navbar-light ${classes.search__bar}`}>
            <h4 className="float-left">
                <span>Your Brands</span>
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </h4>

            <div className={`${classes.search__bar__div}`}>
                <input
                    className={` mr-sm-2 ${classes.search__bar__input}`}
                    placeholder="Search Brands ..."
                    onChange={(e) => handelSearch(e.currentTarget.value)}
                />
            </div>
            <div className="float-right">
                <i onClick={() => setShape(true)} className={`fa fa-th-large fa-2x ${classes.search__bar__div__i}`} aria-hidden="true"></i>
                <i onClick={() => setShape(false)} className={`fa fa-th-list fa-2x ${classes.search__bar__div__i}`} aria-hidden="true"></i>
            </div>
        </nav>
    );
}

export default SearchBar;