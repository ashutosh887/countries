import React from "react";

const Filter = () => {
  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          id="search"
        />
      </form>
      <div>
        <select name="select" id="select" className="select">
          <option value="region">Filter</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
