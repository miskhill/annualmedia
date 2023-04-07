import React from "react";

const AnnualTotals = ({ arr, year }) => {

  const annualTotals = (arr, year) => {
    let total = 0;
    arr.forEach((item) => {
      if (item.createdAt.slice(0, 4) === year.toString()) {
        total ++;
      }
    // total++
    });
    return total;
  }

  // switch statement to differentiate between movies and series and books and change the h3 text
  const mediaType = (movies, series, books) => {
    switch (arr) {
      case arr === movies:
        return <h3 className='totals'>You have watched {annualTotals(arr, year)} movies this year</h3>
      case arr === series:
        return <h3 className='totals'>You have watched {annualTotals(arr, year)} series this year</h3>
      case arr === books:
        return <h3 className='totals'>You have read {annualTotals(arr, year)} books this year</h3>
      default:
        return <h3 className='totals'>You have read {annualTotals(arr, year)} books this year</h3>
    }
  }
  
  
  return (
    <div>
      {mediaType()}
    </div>
  );
}

export default AnnualTotals;

