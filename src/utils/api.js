import {
  collection,
  getDocs,
  getFirestore,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export const getItems = async (category) => {
  const db = getFirestore();
  const data = [];
  const q = category
    ? query(collection(db, "items"), where("category", "==", category))
    : collection(db, "items");
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const getItem = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);
  docSnap.data().id = docSnap.id;
  const data = { id: docSnap.id, ...docSnap.data() };

  return data;
};
