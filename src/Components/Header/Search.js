import React from 'react'
const searchBar = {
    width: '500px',
    height: '50px',
    'box-shadow':
        '0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23)',
    'font-size': '0.8em',
    'padding-left': '25px',
    'border-radius': '100px',
    border: '0px',
    'background-color': '#ff5252'
}

const Search = () => {
    return (
        <form action="http://www.google.com/search" method="get">
            <input
                style={searchBar}
                className="searchBar"
                placeholder="Search.."
                type="text"
                name="q"
            />
        </form>
    )
}

export default Search
