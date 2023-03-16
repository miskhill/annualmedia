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
  
  
  return (
    <div>
      <h3 className='totals'>You have read {annualTotals(arr, year)} books this year</h3>
    </div>
  );
}

export default AnnualTotals;

