import React, { useState, useEffect } from "react";

const AnnualTotals = ({ arr, year, handleYearChange }) => {
  const [inputYear, setInputYear] = useState(year);

  const annualTotals = (arr, year) => {
    let total = 0;
    arr.forEach((movie) => {
      if (movie.createdAt && movie.createdAt.slice(0, 4) === year.toString()) {
        total++;
      }
    });
    return total;
  };

  useEffect(() => {
    handleYearChange(inputYear);
  }, [inputYear, handleYearChange]);

  return (
    <div>
      <input
        type="number"
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
      />
      {annualTotals(arr, inputYear)}
    </div>
  );
};

export default AnnualTotals;
