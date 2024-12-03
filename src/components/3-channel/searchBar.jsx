import React from 'react'
import './channel.css';

function SearchBar({handleSearchInput, searchVid, clearSearchBar}) {
  return (
    <div className='searchBox'>
        <input 
          type="text"
          className='searchBar'
          placeholder='أدخل اسم القناة..'
          value={searchVid}
          onChange={handleSearchInput} />
      <span className='icon-close' onClick={clearSearchBar}></span>
    </div>
  )
}

export default SearchBar