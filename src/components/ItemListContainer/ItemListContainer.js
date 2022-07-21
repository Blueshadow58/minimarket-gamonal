import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const products = [
  {
    id: "1",
    title: "Frambuesas",
    price: 3300,
    pictureUrl: "url",
    stock: 10,
  },
];

const mock = () => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
  return task;
};

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    mock().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Container className="mt-5">
      <ItemList items={items} />

      {/* <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="CustomCard">
              <Card.Img src="https://picsum.photos/id/102/200/150" />
              <Card.Body>
                <Card.Title>{greetings}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <ItemCount stock={5} initial={1} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
};

export default ItemListContainer;
