import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function ProductsList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          const categorySlug = product.category.split(" ").join("-");
          const titleSlug = product.title.split(" ").join("-");
          // const productRoute = `${product.category
          //   .split(" ")
          //   .join("-")}/${product.title.split(" ").join("-")}`;

          return (
            <div
              className="single-product col-lg-2 col-md-3 col-sm-4 col-6 p-2"
              key={product.id}
            >
              <div className="product h-100">
                <div className="image-box m-2">
                  <Link to={`/ecommerce-website/${categorySlug}/${titleSlug}`}>
                    <img
                      className="img-fluid rounded"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="card-body text-center m-2">
                  <div>
                    <Link
                      className="fs-6 fw-bold"
                      to={`${product.category.split(" ").join("-")}`}
                    >
                      {product.category}
                    </Link>
                  </div>
                  <Link to={`/ecommerce-website/${categorySlug}/${titleSlug}`}>
                    {product.title.length > 40
                      ? `${product.title.substring(0, 40)}...`
                      : product.title}
                  </Link>
                  <p>
                    <b> TK {parseFloat(product.price).toFixed(2)} </b>
                  </p>
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
