/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { useDispatch } from "react-redux";
import { productAdded } from "./productsSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("noncategorized");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onImageChanged = (e) => setImage(e.target.value);
  const onRatingChange = (e) => setRating(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  console.log(title, description, category, price, image, rating);
  const onSaveProductClicked = (e) => {
    e.preventDefault();
    if (!title && !description && !price)
      return alert("Enter Products details");
    //category, title, description, price, image, rating
    dispatch(
      productAdded({ title, description, category, price, image, rating })
    );
    navigate("/");
  };
  return (
    <section className="container my-5">
      <h2>Add a New Product</h2>
      <form className="my-5" onSubmit={onSaveProductClicked}>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="form-select form-select-lg mb-3"
          aria-label="Large select example"
        >
          <option>Select Category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelry">jewelry</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            value={title}
            onChange={onTitleChanged}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            value={description}
            onChange={onDescriptionChanged}
            className="form-control"
            id="description"
            aria-describedby="descriptionHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            value={price}
            onChange={onPriceChanged}
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
          />
        </div>
        <label htmlFor="imageLink" className="form-label">
          Select Image
        </label>
        <div className="input-group mb-1">
          <input type="file" className="form-control" id="inputGroupFile" />
          <label className="input-group-text" htmlFor="inputGroupFile">
            Upload
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="imageLink" className="form-label">
            Or Enter Image Link
          </label>
          <input
            type="text"
            value={image}
            onChange={onImageChanged}
            className="form-control"
            id="imageLink"
            aria-describedby="imageLink"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Product Rating
          </label>
          <input
            type="number"
            value={rating}
            onChange={onRatingChange}
            className="form-control"
            id="rating"
            aria-describedby="ratingHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
