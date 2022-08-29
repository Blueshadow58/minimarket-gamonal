import { collection, getDocs, getFirestore } from "firebase/firestore";

export const getItems = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "items"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const getItem = async (id) => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "items"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.find((x) => x.id === id);
};
