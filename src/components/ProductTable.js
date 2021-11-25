import React from 'react';
import ProductCategoryRow  from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    const wines = props.wines;
    let lastCategory = null;
    //order by the selected category

    let rows = [];
    wines.forEach( wine => {
        //name must match the search value
        if (wine.name.toLowerCase().indexOf(props.searchValue.toLowerCase())===-1){
            return;
        }
        //wine must be in selected country
        if (props.countryValue !== '' && wine.country.toLowerCase() !== props.countryValue.toLowerCase()){
            return;
        }
        if (wine.region !== lastCategory){
            rows.push(
                <ProductCategoryRow category={wine.region} key={wine.region} />
            );
        }
        rows.push(
            <ProductRow wine={wine} key={wine.name} />
        );
        lastCategory = wine.region;
    })

    return (
        <table className="productTable">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;