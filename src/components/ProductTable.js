import React from 'react';
import ProductCategoryRow  from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    const wines = props.wines;
    let lastCategory = null;
    //order by the selected category

    let rows = [];
    wines.forEach( wine => {
        if (wine.name.toLowerCase().indexOf(props.searchValue.toLowerCase())===-1){
            return;
        }
        if (wine.year !== lastCategory){
            rows.push(
                <ProductCategoryRow category={wine.year} key={wine.year} />
            );
        }
        rows.push(
            <ProductRow wine={wine} key={wine.name} />
        );
        lastCategory = wine.year;
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