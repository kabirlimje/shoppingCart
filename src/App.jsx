import Login from "./components/Login"
import Register from "./components/Register"
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}

export default App;
