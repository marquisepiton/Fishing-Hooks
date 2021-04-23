import React from "react";
import Item from "./Item";

function Products(props) {
  return (
    <ul className="list-group">
      {props.itemData && props.itemData.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </ul>
  );
}

export default Products;
