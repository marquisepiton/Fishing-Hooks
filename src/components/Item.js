import "./Items.css";
import { Link } from "react-router-dom";

function Item({item}) {
  return (
    <div className="item">
      {item && <li className="list-group-item">
        <h1 className='stuff'>{item.name}</h1>
        <p className='stuff'>{item.description}</p>
        <p className="price">{item.price}</p>
        <Link to={`product/${item.id}`}>
          <button className="item-button">More Info</button>
        </Link>
        <Link to={`product/${item.id}`}>
          <button className="item-button">Add to Cart</button>
        </Link>
      </li>}
    </div>
  );
}

export default Item;
