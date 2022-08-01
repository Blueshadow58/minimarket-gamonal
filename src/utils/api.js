const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const type = "";

const products = [
  {
    id: "1",
    title: "Cafe Juan Valdez",
    price: 3300,
    pictureUrl:
      "https://jumbo.vtexassets.com/arquivos/ids/311066/Principal-5141.jpg?v=637025995567670000",
    stock: 10,
    category: "cafe",
    description: "Cafe Juan Valdez sabor tradicional",
  },
  {
    id: "2",
    title: "Pasta de Esparrago",
    price: 3000,
    pictureUrl:
      "https://tremus.cl/wp-content/uploads/2020/12/FRENTE-1280163.jpg",
    stock: 5,
    category: "conserva",
    description: "Pasta de esparragos Cosecha Verde",
  },
  {
    id: "3",
    title: "Mermelada de higo",
    price: 4000,
    pictureUrl:
      "https://dojiw2m9tvv09.cloudfront.net/38010/product/X_mermelada-higo7694.jpg?56",
    stock: 4,
    description: "Mermelada de higo Cosecha Verde",
  },
  {
    id: "4",
    title: "Cafe Cruzeiro",
    price: 2100,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_642461-MLC46369076078_062021-O.jpg",
    stock: 2,
    category: "cafe",
    description: "Cafe sabor tradicional Cruzeiro",
  },
  {
    id: "5",
    title: "Mermelada Mango",
    price: 2700,
    pictureUrl:
      "https://dojiw2m9tvv09.cloudfront.net/38010/product/mermelada-mango_maracuya7454.jpg",
    stock: 7,
    category: "mermelada",
    description: "Mermelada de mango Cosecha Verde",
  },
  {
    id: "6",
    title: "Pimenton Morrón",
    price: 1800,
    pictureUrl:
      "https://tremus.cl/wp-content/uploads/2020/07/Pimiento-Morron.jpg",
    stock: 2,
    category: "conserva",
    description: "Pimenton morrón Cosecha Verde",
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

export const getItems = () => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
  return task;
};

//Llammar producto
export const getItem = (id) => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products[id - 1]), 2000);
  });
  return task;
};
