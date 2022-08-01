import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Row className="g-4">
      {items.map((item) => (
        <Col xs={6} md={4} lg={3} xl={2} key={item.id}>
          <Item key={item.id} item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
