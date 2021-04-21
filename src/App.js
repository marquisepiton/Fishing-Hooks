import logo from "./logo.svg";
import Items from "./components/Items";
import "./App.css";
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from  'axios'; 

function App() {
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
      <Items itemData={itemData} />
    </div>
  );
}

export default App;
