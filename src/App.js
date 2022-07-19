import logo from "./colun-chocolate.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemListContainer/ItemCount/ItemCount";

const Message = "Greatings Message Testing";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Contenedor de elementos */}
      <ItemListContainer greatings={Message} />
    </div>
  );
}

export default App;
