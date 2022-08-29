import Table from "react-bootstrap/Table";

function CheckoutTable({ props }) {
  const { cart, totalPriceInCart } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(cart).map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.price * product.quantity}</td>
          </tr>
        ))}

        <tr className="">
          <td colSpan={2}>Coste total</td>
          <td colSpan={2}>{totalPriceInCart}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CheckoutTable;
