import {
  collection,
  doc,
  setDoc,
  getDocs,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const getItems = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "items"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

//Llamar producto
export const getItem = async (id) => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "items"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.find((x) => x.id === id);
};
