import React from 'react';

const SearchBar = (props) => {
    return (
        <form>
          <input className="searchBar" type="text" placeholder="Search..." onChange={ e => props.onChange(e.target.value)}/>
          
        </form>
      );
};

export default SearchBar;