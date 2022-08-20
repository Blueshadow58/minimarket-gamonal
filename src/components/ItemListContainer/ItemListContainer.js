import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getItems()
      .then((data) => {
        if (category) {
          setItems(data.filter((product) => product.category === category));
        } else {
          setItems(data);
        }
      })
      .catch((err) => alert(err));
  }, [category]);

  return (
    <Container className="mt-5">
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
