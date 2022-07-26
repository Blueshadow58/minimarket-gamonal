import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Stack from "react-bootstrap/Stack";

import { useState } from "react";
import ItemDetailContainer from "./ItemDetails/ItemDetailContainer";

const Item = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="CustomCard" onClick={() => setShow(true)}>
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
          <Card.Text>{item.description}</Card.Text>
          <ItemCount stock={5} initial={1} />
        </Card.Body>
      </Card>
      {show && <ItemDetailContainer closeModal={setShow} productId={item.id} />}
    </>
  );
};

export default Item;
