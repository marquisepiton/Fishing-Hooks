import "./Items.css";
import {Link} from 'react-router-dom';

function Items(props) {
  return props.itemData.map((item, index) => {
    return (
      <div className="item" key={index}>
        <li className="list-group-item">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to={"product/${item.id}"}>
            <button className="item-button">
              More Info
            </button>
          </Link>
          <Link to={"product/${item.id}"}>
            <button className="item-button">
              Add to Cart 
            </button>
          </Link>
        </li>
      </div>
    );
  });
}

export default Items;
