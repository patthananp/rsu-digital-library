import React from 'react';

import SearchResultItem from "./SearchResultItem";

const SearchResult =(props) => {
    const {items} = props 
    // let items = [
    //     {id : 1, title : "Computer Network", year : 2019, Author : "Jenny", Supervisor : "Billy", Page : 10},
    //     {id : 2, title : "Apple Fruit", year : 2021, Author : "Renny", Supervisor : "Billy", Page : 5},
    //     {id : 3, title : "Social", year : 2020, Author : "Aenny", Supervisor : "Tilly", Page : 100},
    //     {id : 4, title : "Computer AI", year : 2019, Author : "Jenny", Supervisor : "Billy", Page : 10},
    //     {id : 5, title : "Network", year : 2019, Author : "Jenny", Supervisor : "Tilly", Page : 15}
    // ]
    if (items.length > 0) {
        return (
            <div>
              <ul>
                  {items.map((item) => {
                      return <SearchResultItem {...item} key = {item.id}/>
                  })}
              </ul>
              
            </div>
        
          );
    } else {
        return (
            <h1>----NO DATA----</h1>
        )
    }
    
  }
export default SearchResult