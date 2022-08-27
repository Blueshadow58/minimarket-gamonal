import Alert from "react-bootstrap/Alert";

function ResponseOrder({ orderKey }) {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Gracias por tu compra!</Alert.Heading>
        <p>
          Tú codigo de orden se encuentra a continuacion no olvides copiarla!
        </p>
        <hr />
        <p className="mb-0">Codigo: {orderKey}</p>
      </Alert>
    </>
  );
}

export default ResponseOrder;
