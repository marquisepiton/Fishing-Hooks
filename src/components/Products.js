import React from "react";
import Item from './Items'

function Products(props) {
  return (
    <ul className="list-group">
      <Item itemData={props.itemData}/>
    </ul>
  );
}

export default Products;
