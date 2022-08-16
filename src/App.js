import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetails/ItemDetailContainer";

import { Navigate } from "react-router-dom";

import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import CartContainer from "./components/Cart/CartContainer";

const Message = "Greatings Message Testing";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greetings={Message} />}
          />

          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />

          <Route exact path="/cart" element={<CartContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <div className="App">Contenedor de elementos</div> */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
