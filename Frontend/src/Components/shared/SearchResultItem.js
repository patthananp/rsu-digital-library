import PropTypes from 'prop-types';

let SearchResultItem =(props) => {
    // let {title, year, author, supervisor, page} = props
    let item = props
    return (
        <li>
            {item.id}<br />
            {item.title}
            {/* {title}<br /> */}
            {/* {year}{'|'}{author}{'|'}{supervisor}{'|'}{page} */}
        </li>
    )
} 

export default SearchResultItem