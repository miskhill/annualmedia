import React from "react";

const Filter = ({ filters, selectedFilters, onChange }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <select
        style={{ width: "150px", height: "30px", borderRadius: "5px", border: "1px solid #ccc", padding: "5px 10px", fontSize: "16px", marginRight: "10px" }}
        value={selectedFilters.genre}
        onChange={(e) =>
          onChange({ ...selectedFilters, genre: e.target.value })
        }
      >
        <option value=''>Select genre</option>
        {filters.genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        style={{ width: "150px", height: "30px", borderRadius: "5px", border: "1px solid #ccc", padding: "5px 10px", fontSize: "16px", marginRight: "10px" }}
        value={selectedFilters.rating}
        onChange={(e) =>
          onChange({ ...selectedFilters, rating: e.target.value })
        }
      >
        <option value=''>Select rating</option>
        {filters.ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>

      <select
        style={{ width: "150px", height: "30px", borderRadius: "5px", border: "1px solid #ccc", padding: "5px 10px", fontSize: "16px", marginRight: "10px" }}
        value={selectedFilters.year}
        onChange={(e) =>
          onChange({ ...selectedFilters, year: e.target.value })
        }
      >
        <option value=''>Select year</option>
        {filters.years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        style={{ width: "150px", height: "30px", borderRadius: "5px", border: "1px solid #ccc", padding: "5px 10px", fontSize: "16px", marginRight: "10px" }}
        value={selectedFilters.createdAt}
        onChange={(e) =>
          onChange({ ...selectedFilters, createdAt: e.target.value })
        }
      >
        <option value=''>Select created at</option>
        {filters.createdAts.map((createdAt) => (
          <option key={createdAt} value={createdAt}>
            {createdAt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
