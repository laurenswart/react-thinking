import React from 'react';

const ProductRow = (props) => {
    const color=props.wine.color;

    return (
        <tr className={`productRow ${color}`}>
            <td>{props.wine.name}</td>
            <td>{props.wine.price}</td>
        </tr>
    );
};

export default ProductRow;