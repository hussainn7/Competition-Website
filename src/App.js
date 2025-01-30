import React from "react";
import Footer from "./components/Footer";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Preparation from "./pages/PrepProccess/Preparation";
import Farm from "./pages/Farm-to-Table/Farm";
import Sustainability from "./pages/Sustainability/Sustainability";
import Reservation from "./pages/Reservation/Reservation";
import Cart from "./pages/Cart/Cart";
import Shop from './pages/shop/Shop';
import ShopContext from './pages/context/shop-context';
import References from "./pages/References/References";

function App() {
  return (
    <ShopContext>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/references" element={<References />} />
        </Routes>
        <Footer />
      </div>
    </ShopContext>
  );
}

export default App;
