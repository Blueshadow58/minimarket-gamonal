import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Row xs={1} md={4} className="g-4">
      <div>
        {items.map((item) => (
          <Col key={items.id}> {<Item key={item.id} item={item} />}</Col>
        ))}
      </div>
    </Row>
  );
};

export default ItemList;
