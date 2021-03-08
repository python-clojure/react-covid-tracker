import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries, casesType }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            {casesType==="cases" && <strong>{numeral(country.cases).format("0,0")}</strong> }
            {casesType==="recovered" && <strong>{numeral(country.recovered).format("0,0")}</strong> }
            {casesType==="deaths" && <strong>{numeral(country.deaths).format("0,0")}</strong> }
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
