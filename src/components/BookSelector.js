import React, { Component } from "react";
import { render } from "@testing-library/react";


function BookSelector() {
  render()
  // const.options =
  //props.countries.map((country, i) => <option value={country.name} key={i}>{country.name}</option>
  // );
    return (
      <div className='book_selector'>
  <form>
    <label htmlFor="print_type">Print Type:</label>
    <select id="print-type" name="print-type">
      <option value="None">Select one...</option>
      print options go here
    </select>
    <label htmlFor="book_type">Book Type:</label>
    <select id="book-type" name="book-type">
      <option value="None">Select one...</option>
      book options go here
    </select>
  </form>

</div>
    );

}

// BookSelector.defaultProps = {
//   countries: [],
//   countries: [],
// };

export default BookSelector;
