import React from 'react'

function searchBar({handleSearchInput, searchVid}) {
  return (
    <div>
        <input type="text"
               className='searchBar'
               placeholder='أدخل اسم القناة..'
               value={searchVid}
               onChange={handleSearchInput} />
    </div>
  )
}

export default searchBar