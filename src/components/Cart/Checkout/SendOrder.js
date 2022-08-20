import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";

export const SendOrder = async (userData, props) => {
  const db = getFirestore();
  const { cart, totalPriceInCart } = props;

  const newOrder = {
    buyer: userData,
    items: cart,
    total: totalPriceInCart,
  };

  const orderCollection = collection(db, "orders");
  const query = await addDoc(orderCollection, newOrder);
  return query.id;
};

// const db = getFirestore();
// const querySnapshot = await getDocs(collection(db, "items"));
// const data = [];
// querySnapshot.forEach((doc) => {
//   data.push({ id: doc.id, ...doc.data() });
// });
// return data;
