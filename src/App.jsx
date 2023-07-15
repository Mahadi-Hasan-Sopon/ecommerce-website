import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductsList from "./components/features/products/ProductsList";
import AddProduct from "./components/features/products/addProduct";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
