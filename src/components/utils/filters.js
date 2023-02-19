import React from "react";

const Filters = ({ handleFilterChange, handleSortBy, sortBy, searchTerm }) => {
  return (
    <>
      <div
        id='filtersDiv'
        style={{
          margin: "0 auto",
          maxWidth: 800,
          backgroundColor: "#3b3835",
        }}
      >
        <input
          style={{
            width: "200px",
            height: "26px",
            backgroundColor: "#fff",
            color: "#000",
            opacity: '1',
            fontWeight: '800',
          }}
          onChange={handleFilterChange}
          name='searchTerm'
          value={searchTerm}
          placeholder='Search Media 📖'
        />
        <select style={{
          border: '0',
          position: 'absolute',
          borderLeft: '2px solid skyblue',
          height: '26px',
          fontWeight: '900',
          fontSize: '12px',
          backgroundColor: '#f6f5ef',
          color:'#009F8A'
        } } onChange={handleSortBy} name='sortBy' value={sortBy}>
          <option value='createdAt'>Year</option>
          <option value='title'>Title</option>
          <option value='views'>Author</option>
          <option value='rating'>Genre</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
