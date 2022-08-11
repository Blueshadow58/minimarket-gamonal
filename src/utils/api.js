import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const type = "";

const products = [
  {
    // id: 6,
    // title: "Pimenton Morrón",
    // price: 1800,
    // pictureUrl:
    //   "https://tremus.cl/wp-content/uploads/2020/07/Pimiento-Morron.jpg",
    // stock: 2,
    // category: "conserva",
    // description: "Pimenton morrón Cosecha Verde",
  },
];

export const getData = (dataId) =>
  fetch(`${BASE_URL}/comments?postId=${dataId}&type=${type}`, {
    method: "GET",
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    // },
  });

export const createData = () =>
  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    // },
  });

export const updateData = (data) =>
  fetch(`${BASE_URL}posts/${data.userId}`, {
    method: "PUT",
    body: JSON.stringify(data),
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    // },
  });

export const deleteData = (dataId) =>
  fetch(`${BASE_URL}/posts/${dataId.userId}`, {
    method: "DELETE",
  });

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});

products.price = formatter.format(products.price);

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
