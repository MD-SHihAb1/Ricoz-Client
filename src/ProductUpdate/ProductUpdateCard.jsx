import { Link } from "react-router-dom";

const ProductUpdateCard = ({ product }) => {
    const { _id, name, title, price, img } = product;



    
    


    return (
      <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={img} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{title}</p>
            <p>Price: ${price}</p>
            <Link to={`u/${_id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Update</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductUpdateCard;
  