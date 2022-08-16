import React, { useContext } from "react";
import Cart from "./Cart";
import {
  addDoc,
  collection,
  getDoc,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });

export default function CartContainer() {
  const props = useContext(CartContext);

  const db = getFirestore();
  const USER_DEMO = {
    name: "coderhouse",
    phone: "287364872",
    email: "coderhouse@gmail.com",
  };

  const sendOrder = () => {
    const newOrder = {
      buyer: USER_DEMO,
      items: "",
      total: "",
    };

    const orderCollection = collection(db, "users");
    addDoc(orderCollection, newOrder).then(({ id }) => console.log({ id }));
  };

  return <Cart props={props} />;
}
