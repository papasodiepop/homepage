import React from 'react'

const Search = () => {
    return (
        <form action="http://www.google.com/search" method="get">
            <input
                className="searchBar"
                placeholder="Search.."
                type="text"
                name="q"
            />
        </form>
    )
}

export default Search
