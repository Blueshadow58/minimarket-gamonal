import logo from "./colun-chocolate.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetails/ItemDetailContainer";

const Message = "Greatings Message Testing";

const category = "cafe";

function App() {
  return (
    <BrowserRouter>
      {/* navbar */}
      <NavBar />
      <Routes>
        {/* home */}
        <Route
          exact
          path="/"
          element={<ItemListContainer greetings={Message} />}
        />
        {/* detalle prodducto */}
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        {/* filtro por categoria */}
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        {/* Cart page */}
        <Route exact path="/cart" element={<h1>Cart</h1>} />
        {/* no encontrar lo que busca en url */}
        <Route exact path="*" element={<ItemListContainer />} />
      </Routes>
      {/* <div className="App">Contenedor de elementos</div> */}
    </BrowserRouter>
  );
}

export default App;
