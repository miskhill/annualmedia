import React from 'react'

const Filters = ({ handleFilterChange, handleSortBy, sortBy, searchTerm }) => {
  return (
    <>
      <div className="filters d-flex justify-content-around" id="filtersDiv">
        <input onChange={ handleFilterChange } name="searchTerm" value={ searchTerm } placeholder=' search media'/>
        <select onChange={handleSortBy} name="sortBy" value={sortBy}>
          <option value="createdAt">Date</option>
          <option value="title">Title</option>
          <option value="views">Author</option>
          <option value="rating">Genre</option>
          
        </select>
      </div>
    </>
  )
}

export default Filters