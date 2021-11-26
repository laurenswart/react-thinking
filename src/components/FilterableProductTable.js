import React, { useEffect, useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
    const [searchValue, setSearchValue] = useState("");
    const [wines, setWines] = useState([]);
    const [countries, setCountries] = useState([]);
    const [countryValue, setCountryValue] = useState("");
    

    useEffect( () => {
        fetch("https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines")
            .then (response => response.json())
            .then (data => {
                setWines(data.sort( (a,b) => (b.region <= a.region ? -1 : 1)));
                //get countries
                setCountries(getCountries(data));

            })

    }, [])
    

    return (
        <div  className="filterableProductTable"> 
            <SearchBar inputOnChange={setSearchValue} selectOnChange={setCountryValue} countries={countries}/>
            <ProductTable wines={wines} searchValue={searchValue} countryValue={countryValue}/>
        </div>
    );
};

function getCountries(wines){
    let countries = [];
    for(let wine of wines){
        if (countries.indexOf(wine.country)===-1){
            countries.push(wine.country);
        }
    }
    return countries;
}
export default FilterableProductTable;