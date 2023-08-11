import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductsList from "./components/features/products/ProductsList";
<<<<<<< HEAD

import "./App.css";
import AddProduct from "./components/features/products/addProduct";
=======
import AddProduct from "./components/features/products/addProduct";

import "./App.css";
>>>>>>> df7c9b00a5cbb1d33d83c7c3004f7fdf0768f37e

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
<<<<<<< HEAD
          {/* <Route exact path="/" element={<FetchAPI />} /> */}
          <Route exact path="/" element={<ProductsList />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          {/* <Route exact path="/posts/:postId" component={SinglePostPage} /> */}
=======
          <Route exact path="/" element={<ProductsList />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
>>>>>>> df7c9b00a5cbb1d33d83c7c3004f7fdf0768f37e
        </Routes>
      </div>
    </Router>
  );
}

export default App;
