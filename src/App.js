import React from "react";
import { useSelector } from "react-redux";
import Cart from "./components/cart/Cart";
import MainContent from "./components/mainContent/MainContent";
import SideBar from "./components/sidebar/SideBar";
import "./App.scss";

function App() {
  const cartIsOpen = useSelector((state) => state.cart.cartOpened);

  return (
    <div className="App">
      <SideBar />
      <MainContent />
      {cartIsOpen && <Cart />}
    </div>
  );
}

export default App;
