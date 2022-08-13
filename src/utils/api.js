import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const deleteData = (dataId) =>
  fetch(`${BASE_URL}/posts/${dataId.userId}`, {
    method: "DELETE",
  });

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});

// products.price = formatter.format(products.price);

export const getItems = () => {
  const task = new Promise((resolve) => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(data);
      })
      .catch((err) => console.log(err));
  });
  return task;
};

//Llammar producto
export const getItem = (id) => {
  const task = new Promise((resolve) => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // resolve(resolve(data.id === id));
        resolve(data.find((x) => x.id === id));
      })
      .catch((err) => console.log(err));
  });
  return task;
};
