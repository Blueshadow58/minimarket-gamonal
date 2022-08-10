import { createContext, useState } from "react";

//creacion del context del carrito, valor por defecto []
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Ya se encuentra generada la logica para buscar un objecto/Producto en especifico
  const isInCart = (productId) => {
    const itemByIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === productId
    );
    const product = cart[itemByIndex];
    product
      ? console.log(product)
      : console.log("El producto no existe en el carro");
  };
  const cleanCart = () => {
    setCart([]);
  };
  const addToCart = (item, quantity) => {
    //CARRO VACIO
    //verificar si el carrito esta vacio
    if (cart.length === 0) {
      const itemToAdd = {
        ...item,
        quantity: quantity,
      };
      setCart([itemToAdd]);
    }

    //CARRO DUPLICADO
    //Logica duplicados
    //obtencion del incide del duplicado
    const itemDuplicateIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === item.id
    );
    //si el valor es mayor a 0 es el item se encuentra duplicado
    if (itemDuplicateIndex >= 0) {
      const itemToUpdate = {
        ...item,
        quantity: cart[itemDuplicateIndex].quantity + quantity,
      };
      //copia del carrito
      const cartDraft = [...cart];

      //actualizar el item de un id especifico
      cartDraft[itemDuplicateIndex] = itemToUpdate;

      //setear el carrito
      setCart(cartDraft);
    } else {
      //CARRO SIN DUPLICADOS
      //Item no duplicado
      const itemToAdd = {
        ...item,
        quantity: quantity,
      };
      //copia de los datos del carrito en un borrador y se le agrega el nuevo item
      const cartDraft = [...cart, itemToAdd];
      setCart(cartDraft);
    }
  };

  const removeToCart = (productId) => {
    const cartDraft = [...cart];
    const filteredCart = cartDraft.filter(
      (cartDraft) => cartDraft.id !== productId
    );

    setCart(filteredCart);
  };

  // let cantInCart = 0;
  // cart.forEach((item) => {
  //   cantInCart += item.quantity;
  // });

  const cantInCart = cart.reduce(
    (previous, item) => previous + item.quantity,
    0
  );

  // const formatter = new Intl.NumberFormat("es-CL", {
  //   style: "currency",
  //   currency: "CLP",
  //   minimumFractionDigits: 0,
  // });

  const totalPriceInCart = cart.reduce(
    (previous, item) => previous + item.price * item.quantity,
    0
  );

  const valueToShare = {
    cart,
    isInCart,
    cleanCart,
    addToCart,
    removeToCart,
    cantInCart,
    totalPriceInCart,
  };
  return (
    // proveer valores a compartirs
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
