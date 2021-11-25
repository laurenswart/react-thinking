import React from 'react';

const SearchBar = (props) => {
    return (
        <form className="searchBar">
          <input type="text" placeholder="Search wine names" onChange={ e => props.inputOnChange(e.target.value)}/>
          <select onChange={e => props.selectOnChange(e.target.value)}>
            <option value="">All countries</option>
            { props.countries.map( option => <option value={option} key={option}>{option}</option>)}
          </select>
        </form>
      );
};

export default SearchBar;