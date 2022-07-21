import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Stack from "react-bootstrap/Stack";

const Item = ({ item }) => {
  return (
    <Card className="CustomCard">
      <Card.Img src="https://picsum.photos/id/102/200/150" />
      <Card.Body>
        <Stack direction="horizontal" className="justify-content-around">
          <Card.Title>
            <span>{item.title}</span>
          </Card.Title>
          <Card.Title>
            <span> Precio: ${item.price}</span>
          </Card.Title>
        </Stack>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <ItemCount stock={5} initial={1} />
      </Card.Body>
    </Card>
  );
};

export default Item;
