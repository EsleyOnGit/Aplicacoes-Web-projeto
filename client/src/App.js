import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { addProduct } from "../../controllers/productController";
import ShowProducts from "./screens/ShowProducts";
import EditProduct from "../src/screens/EditProduct";
import DetailProduct from "../src/components/DetailProduct";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/addProduct" Component={addProduct} />
          <Route path="/products" Component={ShowProducts} />
          <Route path="/product/edit/:id" Component={EditProduct} />
          <Route path="/products" Component={DetailProduct} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
