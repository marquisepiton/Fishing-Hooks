import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import data from "./components/data.json";
import Products from "./components/Products";
import NavBarItem from "./components/NavBarItems";
import ProductPage from "./components/ProductPage";

function App() {
  //================================= Calling from an API to grab all the products =============================================================
  const [itemData, setItemData] = useState([]);
  const axiosGet = () => {
    let apiURL = "https://awesomeincbootcampapi-ianrios529550.codeanyapp.com";

    axios
      .get(apiURL + "/api/store/products")
      .then(function (response) {
        setItemData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(axiosGet, []);
  return (
    <div>
      <Router>
        <div>
          <div className="container-fluid">
            <ul className="nav nav-pills">
              <NavBarItem />
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/product/:id">
            <ProductPage itemData={itemData}/>
          </Route>
          <Route path="/" exact>
            <Products itemData={itemData}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
