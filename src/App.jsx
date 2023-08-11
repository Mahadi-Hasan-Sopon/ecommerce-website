import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductsList from "./components/features/products/ProductsList";

import "./App.css";
import AddProduct from "./components/features/products/addProduct";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={<FetchAPI />} /> */}
          <Route exact path="/ecommerce-website" element={<ProductsList />} />
          <Route
            exact
            path="/ecommerce-website/addproduct"
            element={<AddProduct />}
          />
          {/* <Route exact path="/posts/:postId" component={SinglePostPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
