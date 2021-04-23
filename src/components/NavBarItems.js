import React, { Component } from "react";
import data from "./data.json";

function NavBarItem(props) {
  return data.pages.map((item, index) => {
    return (
      <div>
        <li className="nav-item" key={index}>
          <a
            href={"#"}
            currentPage={props.currentPage}
            className={
              "nav-link" + (props.currentPage === index ? " active" : "")
            }
          >
            {item.name}
          </a>
        </li>
      </div>
    );
  });
}
export default NavBarItem;
