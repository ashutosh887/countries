import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <article key={numericCode} className="card">
              <img src={flag} alt="Flag" />
              <div className="details">
                <h3>{name}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
