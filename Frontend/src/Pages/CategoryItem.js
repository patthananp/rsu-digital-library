import React from 'react';

function CategoryItem(props) {
    let item = props
    
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.pages}</td>
            <td>{item.year}</td>
            <td> [A] [B]</td>
        </tr>
    )
}

export default CategoryItem;
