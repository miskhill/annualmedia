import React from "react";
// link the css file to the component



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
      <h3 className='totals'>You have read {annualTotals(arr, year)} books</h3>
    </div>
  );
}

export default AnnualTotals;

