const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const type = "";

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

const products = [
  {
    id: "1",
    title: "Frambuesas",
    price: 3300,
    pictureUrl: "https://picsum.photos/id/102/600/700",
    stock: 10,
    description: "Kilo de frambuesas",
  },
  // {
  //   id: "2",
  //   title: "Naranjas",
  //   price: 3000,
  //   pictureUrl: "https://picsum.photos/id/102/600/700",
  //   stock: 5,
  //   description: "Kilo de naranjas",
  // },
];

export const mock = () => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
  return task;
};

//Llammar producto
export const getItem = (productId) => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products[productId - 1]), 2000);
  });
  return task;
};
