import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <>
      <Card className={item.stock === 0 ? "DisabledCard" : ""}>
        <Card.Img className="p-3 CustomImgCard" src={item.pictureUrl} />
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
          <div className="text-center">
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-outline-dark btn-number"
            >
              Ver detalle
            </button>
          </div>
        </Card.Body>
        <Card.Footer className="card-footer text-center">
          Stock {item.stock}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Item;
