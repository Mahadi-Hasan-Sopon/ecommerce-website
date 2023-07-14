import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { productAdded } from './productsSlice';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onDescriptionChanged = (e) => setDescription(e.target.value);

    const onSaveProductClicked = () => {
        if (!title && !description) return alert('Enter Products details');
        //category, title, description, price, image, rating
        dispatch(productAdded(title, description));
        setTitle('');
        setDescription('');
    };
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <select name="category" id="category">
                    <option value="men's clothing">men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women's clothing</option>
                </select>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={description}
                    onChange={onDescriptionChanged}
                />
                <button type="button" onClick={onSaveProductClicked}>
                    Add Product
                </button>
            </form>
        </section>
    );
};

export default AddProduct;
