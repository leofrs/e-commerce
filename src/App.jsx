import Home from "./page/Home";
import Products from "./page/Products";
import Car from "./page/Car";
import Login from "./page/Login";
import Register from "./page/Register";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="products" element={<Products />} />
        <Route index path="car" element={<Car />} />
        <Route index path="register" element={<Register />} />
        <Route index path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
