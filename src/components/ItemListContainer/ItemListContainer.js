import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemCollection = collection(db, "items");
  //   getDocs(itemCollection)
  //     .then((snapshot) => {
  //       const data = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       console.log(data);
  //       setItems(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        if (category) {
          setItems(data.filter((product) => product.category === category));
        } else {
          setItems(data);
        }
      })
      .catch((err) => alert(err));
  }, [category]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemCollection = collection(db, "items", "BchsqIPatyIumiysdXEp");
  //   getDoc(itemCollection)
  //     .then((snapshot) => {
  //       const data = snapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
  //       console.log(data)

  //     })
  //     .catch((err) => {
  //       console.log(err);

  // },[]);

  return (
    <Container className="mt-5">
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
