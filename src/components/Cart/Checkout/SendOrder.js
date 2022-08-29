import {
  doc,
  addDoc,
  updateDoc,
  collection,
  getFirestore,
  increment,
} from "firebase/firestore";

export const SendOrder = async (userData, props) => {
  const db = getFirestore();
  const { cart, totalPriceInCart } = props;

  const newOrder = {
    buyer: userData,
    items: cart,
    total: totalPriceInCart,
    state: "generada",
    date: Date(),
  };

  cart.forEach((itemCart) => {
    const itemRef = doc(db, "items", itemCart.id);

    updateDoc(itemRef, {
      stock: increment(-itemCart.quantity),
    });
  });

  const orderCollection = collection(db, "orders");
  const query = await addDoc(orderCollection, newOrder);
  return query.id;
};
