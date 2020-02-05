import React from 'react'
const searchBar = {
    width: '500px',
    height: '50px',
    boxShadow: '0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23)',
    fontSize: '0.8em',
    paddingLeft: '25px',
    borderRadius: '100px',
    border: '0px',
    backgroundColor: '#ff5252'
}

const Search = () => {
    return (
        <form action="http://www.google.com/search" method="get">
            <input
                style={searchBar}
                className="searchBar"
                placeholder="Search.."
                autoComplete="off"
                type="text"
                name="q"
            />
        </form>
    )
}

export default Search
