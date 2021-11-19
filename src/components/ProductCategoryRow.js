import React from 'react';

const ProductCategoryRow = (props) => {
    return (
        <tr className="productCategoryRow" ><td colSpan="2">{props.category}</td></tr>
    );
};

export default ProductCategoryRow;