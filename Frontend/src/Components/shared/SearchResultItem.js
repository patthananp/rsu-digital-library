import PropTypes from 'prop-types';

let SearchResultItem =(props) => {
    let {title, year, author, supervisor, page} = props
    return (
        <li>
            {title}<br />
            {year}{'|'}{author}{'|'}{supervisor}{'|'}{page}
        </li>
    )
} 

export default SearchResultItem