import Alert from "react-bootstrap/Alert";

function ResponseOrder({ orderKey, userData }) {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>
          Hey, gracias {userData.name} por tu compra!
        </Alert.Heading>
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
