import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function ProductsList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div
              className="single-product col-lg-2 col-md-3 col-sm-4 col-6 p-2"
              key={product.id}
            >
              <div className="product h-100">
                <div className="image-box m-2">
                  <Link to={`${product.category}/${product.title}`}>
                    <img
                      className="img-fluid rounded"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="card-body text-center m-2">
                  <Link to={`${product.category}/${product.title}`}>
                    <h6> {product.category} </h6>
                    <p>{product.title.substring(0, 40)}...</p>
                    <p>
                      <b> TK {product.price} </b>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductsList;
