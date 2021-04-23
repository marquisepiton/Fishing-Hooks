import reactDom from "react-dom";
import {Link} from 'react-router-dom';


function ProductPage(){

    return(
        <div>
        <li className="list-group-item">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to={"products/"}>
            <button className="item-button">
              Go Back 
            </button>
          </Link>
          <Link to={"cart/"}>
            <button className="item-button">
              Add to Cart 
            </button>
          </Link>
        </li>  

        </div>

    );


}

export default ProductPage;