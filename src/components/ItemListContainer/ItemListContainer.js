import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";

// const ItemListContainer = ({ props }) => {
//   return <span>{props}</span>;
// };

// export default ItemListContainer;

import React, { Component } from "react";
import ItemCount from "./ItemCount/ItemCount";

export default class ItemListContainer extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card className="CustomCard">
                <Card.Img src="https://picsum.photos/id/102/200/150" />
                <Card.Body>
                  <Card.Title>{this.props.greatings}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <ItemCount stock={5} initial={1} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
