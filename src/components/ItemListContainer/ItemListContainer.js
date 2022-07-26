import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { mock } from "../../utils/api";
import ItemDetail from "./ItemDetails/ItemDetail";
import { Button } from "bootstrap";
import ItemDetailContainer from "./ItemDetails/ItemDetailContainer";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    mock().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Container className="mt-5">
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
