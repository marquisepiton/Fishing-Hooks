import reactDom from "react-dom";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


function ProductPage(props){

    // use params to get id 
    
        let { id } = useParams();
        const product = props.item.find( item => item.id === parseInt(id));
    
    // pass item from app as prop 

    // find object from item data using id from params

    return(
        <div>
        <li className="list-group-item">
          <h1>{product && product.name}</h1>
          <p>{product && product.description}</p>
          <p>{product && product.price}</p>
          <Link to={"/products/"}>
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