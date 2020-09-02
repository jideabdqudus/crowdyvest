import React, { Fragment } from "react";

//Ant Design Import
import "antd/dist/antd.css";
import Header from "./layout/Header";
import Home from "./pages/Home";
import './App.css'
const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Home />
      </div>
    </Fragment>
  );
};

export default App;
