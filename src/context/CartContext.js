import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (productId) => {
    const itemByIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === productId
    );
    const product = cart[itemByIndex];

    if (product) {
      return true;
    } else {
      return false;
    }
  };
  const cleanCart = () => {
    setCart([]);
  };
  const addToCart = (item, quantity) => {
    if (cart.length === 0) {
      const itemToAdd = {
        ...item,
        quantity: quantity,
      };
      setCart([itemToAdd]);
    }

    const itemDuplicateIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === item.id
    );

    if (itemDuplicateIndex >= 0) {
      const itemToUpdate = {
        ...item,
        quantity: cart[itemDuplicateIndex].quantity + quantity,
      };

      const cartDraft = [...cart];

      cartDraft[itemDuplicateIndex] = itemToUpdate;

      setCart(cartDraft);
    } else {
      const itemToAdd = {
        ...item,
        quantity: quantity,
      };

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

  const cantInCart = cart.reduce(
    (previous, item) => previous + item.quantity,
    0
  );

  const totalPriceInCart = cart.reduce(
    (previous, item) => previous + item.price * item.quantity,
    0
  );

  const decreaseCantProduct = (productId) => {
    const item = cart.find((x) => x.id === productId);

    const itemIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === item.id
    );

    if (cart[itemIndex].quantity > 1) {
      const itemToUpdate = {
        ...item,
        quantity: cart[itemIndex].quantity - 1,
      };

      const cartDraft = [...cart];

      cartDraft[itemIndex] = itemToUpdate;

      setCart(cartDraft);
    }
  };

  const increaseCantProduct = (productId) => {
    const item = cart.find((x) => x.id === productId);

    const itemIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === item.id
    );

    if (cart[itemIndex].quantity < cart[itemIndex].stock) {
      const itemToUpdate = {
        ...item,
        quantity: cart[itemIndex].quantity + 1,
      };

      const cartDraft = [...cart];

      cartDraft[itemIndex] = itemToUpdate;

      setCart(cartDraft);
    }
  };

  const inputChangeCant = (event, id) => {
    const item = cart.find((x) => x.id === id);
    const itemIndex = cart.findIndex(
      (itemInTheCart) => itemInTheCart.id === item.id
    );

    const inputData = event.target.value;

    function isNumber(str) {
      if (str.trim() === "") {
        return false;
      }
      return !isNaN(str);
    }

    if (isNumber(inputData) && inputData >= 1) {
      if (event.target.value <= item.stock) {
        const itemToUpdate = {
          ...item,
          quantity: parseInt(inputData),
        };
        const cartDraft = [...cart];
        cartDraft[itemIndex] = itemToUpdate;
        setCart(cartDraft);
      } else {
        const itemToUpdate = {
          ...item,
          quantity: cart[itemIndex].quantity,
        };
        const cartDraft = [...cart];
        cartDraft[itemIndex] = itemToUpdate;
        setCart(cartDraft);
      }
    }
  };

  const valueToShare = {
    cart,
    isInCart,
    cleanCart,
    addToCart,
    removeToCart,
    cantInCart,
    totalPriceInCart,
    decreaseCantProduct,
    increaseCantProduct,
    inputChangeCant,
  };
  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
