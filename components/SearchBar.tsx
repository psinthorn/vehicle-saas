"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {
    console.log("Handle Search Click");
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}> 
      <div className='searchbar_item'>    
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar