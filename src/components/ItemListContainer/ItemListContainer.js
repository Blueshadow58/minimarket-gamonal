import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getItems(category)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => alert(err));
  }, [category]);

  return (
    <Container className="mt-5">
      <Spinner
        className="customSpinner"
        variant="dark"
        animation="border"
        role="status"
        hidden={items.length}
      ></Spinner>
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
