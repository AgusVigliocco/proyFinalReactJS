import React, { useEffect, useState } from "react";

import ItemList from "../../components/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";


export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    if (categoriaId) {
      const queryFilter = query(queryCollection, where("Categoria", "==", categoriaId));
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() })),
        ),
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))))
    }
  }, [categoriaId]);

  return (
    <div className="list-item">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
