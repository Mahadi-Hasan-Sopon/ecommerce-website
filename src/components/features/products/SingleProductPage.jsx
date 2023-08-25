/**
* category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { categorySlug, titleSlug } = useParams();
  const products = useSelector((state) => state.products);
  const category = categorySlug.split("-").join(" ");
  const title = titleSlug.split("-").join(" ");
  const selectedProduct = products?.filter(
    (product) => product.category == category && product.title == title
  );

  return (
    <div className="container-fluid">
      {selectedProduct?.map((product) => {
        return (
          <div className="product d-flex gap-5" key={product.id}>
            <div className="img w-50 p-4 border">
              <img src={product.image} alt="" />
            </div>
            <div className="content border w-50 ps-5">
              <h3>{product.title}</h3>
                    <p>{product.rating?.rate} {" "} {product.rating?.count ? product.rating.count : 1} reviews</p>
              <p>Product Id: {product.id}</p>
              <h5> Special Price: {product.price} </h5>
              <h3>Quick Overview</h3>
              <ul>
                <li>{product.description}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SingleProductPage;
