import React, { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import "./ItemListContainer.css";
const products = [
  {
    id: 1,
    Categoria: "Iphone",
    Modelo: "Iphone 13 PRO",
    Precio: "1423.30",
    Imagen:
      "https://www.apple.com/v/iphone/home/bi/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large.jpg",
    Stock: "15",
  },
  {
    id: 2,
    Categoria: "Iphone",
    Modelo: "Iphone 13",
    Precio: "1223.36",
    Imagen:
      "https://www.apple.com/v/iphone/home/bi/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg",
    Stock: "10",
  },
  {
    id: 3,
    Categoria: "Iphone",
    Modelo: "Iphone SE",
    Precio: "1004.60",
    Imagen:
      "https://www.apple.com/v/iphone/home/bi/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg",
    Stock: "15",
  },
  {
    id: 4,
    Categoria: "Iphone",
    Modelo: "Iphone 12",
    Precio: "890.36",
    Imagen:
      "https://www.apple.com/v/iphone/home/bi/images/overview/compare/compare_iphone_12__dz3sv9lzdzu6_large.jpg",
    Stock: "5",
  },
  {
    id: 5,
    Categoria: "MacBook",
    Modelo: "MacBook Air 13",
    Precio: "1200.80",
    Imagen:
      "https://www.apple.com/v/mac/compare/u/images/overview/compare_macbook_air_retina_gold__bvxcq8zvah36_large.jpg",
    Stock: "3",
  },
  {
    id: 6,
    Categoria: "MacBook",
    Modelo: "MacBook Air Pro",
    Precio: "1320.80",
    Imagen:
      "https://www.apple.com/v/mac/compare/u/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_large.jpg",
    Stock: "6",
  },
  {
    id: 7,
    Categoria: "MacBook",
    Modelo: "MacBook Air Pro 17",
    Precio: "1600.20",
    Imagen:
      "https://www.apple.com/v/mac/compare/u/images/overview/compare_macbook_pro_13_silver__b61a0n20o8nm_large.jpg",
    Stock: "8",
  },

  {
    id: 8,
    Categoria: "Watch",
    Modelo: "Watch Series 5",
    Precio: "410.90",
    Imagen:
      "https://www.apple.com/v/watch/compare/u/images/overview/hero/compare_hero_s7__gemvi9r3xii6_large.jpg",
    Stock: "4",
  },
  {
    id: 9,
    Categoria: "Watch",
    Modelo: "Watch Series 3",
    Precio: "250.90",
    Imagen:
      "https://www.apple.com/v/watch/compare/u/images/overview/hero/compare_hero_se__rzclouqawwyi_large.jpg",
    Stock: "10",
  },
  {
    id: 10,
    Categoria: "Watch",
    Modelo: "Watch Series SE",
    Precio: "180.90",
    Imagen:
      "https://www.apple.com/v/watch/compare/u/images/overview/hero/compare_hero_s3__ca8thet5mtde_large.jpg",
    Stock: "15",
  },
];

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} productos`);
  };

  return (
    <div className="list-item">
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
