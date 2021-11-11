import React, { Fragment } from "react";

import Countries from "./components/Countries";
import Header from "./components/Layout/Header";
import Filter from "./components/Layout/Filter";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}

export default App;
