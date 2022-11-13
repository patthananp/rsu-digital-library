import React from 'react';

import SearchResultItem from "./SearchResultItem";

const SearchResult =(props) => {
    const {items} = props 

    if (items.length > 0) {
        return (
            <div>
                {items.map((item) => {
                    return <SearchResultItem {...item} key = {item.id}/>
                })}
            </div>
        
          );
    // } else {
    //     return (
    //         <h1>----NO DATA----</h1>
    //     )
    }
    
  }
export default SearchResult;