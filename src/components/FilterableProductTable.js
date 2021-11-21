import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
    const [searchValue, setSearchValue] = useState("");
    let wines = [
        {id:"9","name":"BLOCK NINE",year:"2009",grapes:"Pinot Noir",country:"USA",region:"California",description:"With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.",picture:"block_nine.jpg",price:"21","capacity":"75",color:"white",extra:null},
        {id:"11","name":"BODEGA LURTON",year:"2011",grapes:"Pinot Gris",country:"Argentina",region:"Mendoza",description:"Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.",picture:"bodega_lurton.jpg",price:"103.8","capacity":"75",color:"red",extra:null},
        {id:"1","name":"CHATEAU DE SAINT COSME",year:"2009",grapes:"Grenache \/ Syrah",country:"France",region:"Southern Rhone \/ Gigondas",description:"The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",picture:"saint_cosme.jpg",price:"32.5","capacity":"75",color:"red",extra:"{\"bio\":true}"},
        {id:"7","name":"CHATEAU LE DOYENNE",year:"2005",grapes:"Merlot",country:"France",region:"Bordeaux",description:"Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the\nsenses.",picture:"le_doyenne.jpg",price:"12.48","capacity":"75",color:"pink",extra:null},
        {id:"8","name":"DOMAINE DU BOUSCAT",year:"2009",grapes:"Merlot",country:"France",region:"Bordeaux",description:"The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",picture:"bouscat.jpg",price:"9.9","capacity":"75",color:"white",extra:null},
        {id:"10","name":"DOMAINE SERENE",year:"2007",grapes:"Pinot Noir",country:"USA",region:"Oregon",description:"Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.",picture:"domaine_serene.jpg",price:"69.5","capacity":"75",color:"pink",extra:null}
    ];
    wines = wines.sort( (a,b) => b.year - a.year);

    return (
        <div  className="filterableProductTable"> 
            <SearchBar searchValue={searchValue} onChange={setSearchValue}/>
            <ProductTable wines={wines} searchValue={searchValue}/>
        </div>
    );
};

export default FilterableProductTable;