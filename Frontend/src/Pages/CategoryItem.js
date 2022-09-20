import React from 'react';

function CategoryItem(props) {
    let item = props
    
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.id}</td>
        </tr>
    )
}

export default CategoryItem;
