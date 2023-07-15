import { useState } from "react";

import { useDispatch } from "react-redux";
import { productAdded } from "./productsSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onImageChanged = (e) => setImage(e.target.value);
  const onRatingChanged = (e) => setRating(e.target.value);

  const onSaveProductClicked = () => {
    if (!title && !description && !price)
      return alert("Enter Products details");
    //category, title, description, price, image, rating
    dispatch(productAdded(title, description, price, image, rating));
    setTitle("");
    setDescription("");
    setPrice("");
  };
  return (
    <section>
      <h2>Add a New Product</h2>
      <form>
        <select name="category" id="category">
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelry">jewelry</option>
          <option value="electronics">electronics</option>
        </select>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="description">Content:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />
        <label htmlFor="price">Post Title:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={onPriceChanged}
        />
        <label htmlFor="image">Post Title:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={onImageChanged}
        />
        <label htmlFor="rating">Post Title:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={rating}
          onChange={onRatingChanged}
        />
        <button type="button" onClick={onSaveProductClicked}>
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
